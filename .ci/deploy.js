#!/usr/bin/env node
const path = require("path");
const meow = require("meow");
const execa = require("execa");
const sander = require("@marionebl/sander");

const git = (args, opts) => {
	return execa("git", args, opts);
};

async function main(cli) {
	const { stdout: hash } = await git(["rev-parse", "--short", "HEAD"], { cwd: process.cwd() });
	const source = cli.flags.source;
	const target = cli.flags.target;
	const identity = cli.flags.identity ? path.resolve(process.cwd(), cli.flags.identity) : null;

	if (!source) {
		console.log("--source directory deploy is required.");
		console.log(cli.help);
		return process.exit(1);
	}

	if (!target) {
		console.log("--target git url is required.");
		console.log(cli.help);
		return process.exit(1);
	}

	if (!(await sander.exists(source))) {
		console.log(`--source ${source} could not be found`);
		console.log(cli.help);
		return process.exit(1);
	}

	if (identity && !(await sander.exists(identity))) {
		console.log(`--identity ${identity} could not be found from ${process.cwd()}`);
		cli.log(cli.help);
		return process.exit(1);
	}

	const targetDir = Path.basename(target, Path.extname(target));

	await git(["clone", target, targetDir], { stdout: "inherit", stderr: "inherit" });
	await execa("cp", [`${source}/*`, targetDir], { stdout: "inherit", stderr: "inherit" });
	await git(["add", "."], { cwd: targetDir, stderr: "inherit" });
	await git(["commit", "-m", `Deploy "${hash}" at ${new Date()}`], { cwd: targetDir, stderr: "inherit" });

	const env = {};

	if (identity) {
		const cp = await execa("ssh-agent", ["-s"]);
		env.SSH_AUTH_SOCK = cp.stdout.split("SSH_AUTH_SOCK=")[1].split(";")[0];
		env.SSH_AGENT_PID = cp.stdout.split("SSH_AGENT_PID=")[1].split(";")[0];
		await execa.shell(`ssh-add ${identity}`, { stdout: "inherit", stdin: "inherit", env });
	}

	await git(["push", "--set-upstream", "origin", "master"], { cwd: targetDir, stderr: "inherit", env });

	if (identity) {
		await execa("ssh-add", ["-D"], { cwd, stderr: "inherit", env });
	}
}

main(
	meow(`
  Options
    --source    - path to source folder to upload
    --target    - git remote url to push to
`)
);
