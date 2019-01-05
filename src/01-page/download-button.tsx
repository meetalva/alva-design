import * as React from "react";
import Button, { ButtonOrder } from "../button";
import * as semver from "semver";
import * as Path from "path";
import Space from '../space';
import { SpaceSize, Color } from '..';
import Copy, { Size as CopySize } from '../copy';

const semverUtils = require("semver-utils");

export enum Os {
	macOS = "macOS",
	Windows = "Windows",
	Linux = "Linux",
	Unknown = "Unknown"
}

export enum Extension {
	exe = "exe",
	dmg = "dmg",
	appimage = "AppImage",
	Unknown = "Unknown"
}

export enum VersionState {
	Idle,
	Fetching,
	Failed,
	Fetched
}

export interface DownloadButtonState {
	version: Version;
	os: Os;
	ext: Extension;
	url: string | undefined;
	canaryUrl: string | undefined;
}

export type Version =
	| { state: VersionState.Idle; value: undefined }
	| { state: VersionState.Fetching; value: undefined }
	| { state: VersionState.Failed; value: undefined }
	| { state: VersionState.Fetched; value: string };

export class DownloadButton extends React.Component<{}, DownloadButtonState> {
	public readonly state: DownloadButtonState = {
		version: { state: VersionState.Idle, value: undefined } as Version,
		os: this.getOS(),
		ext: this.getFileExtension(this.getOS()),
		canaryUrl: undefined,
		url: undefined
	};

	private getOS(): Os {
		if (typeof window === "undefined") {
			return Os.Unknown;
		}
		switch (navigator.platform.split(" ")[0]) {
			case "MacIntel":
				return Os.macOS;
			case "Win32":
			case "Win64":
				return Os.Windows;
			case "Linux":
				return Os.Linux;
			default:
				return Os.Unknown;
		}
	}

	private getFileExtension(os: Os): Extension {
		switch (os) {
			case Os.macOS:
				return Extension.dmg;
			case Os.Windows:
				return Extension.exe;
			case Os.Linux:
				return Extension.appimage;
			case Os.Unknown:
				return Extension.Unknown;
		}
	}

	public async componentDidMount() {
		this.setState({
			...this.state,
			version: { state: VersionState.Fetching, value: undefined } as Version
		});

		const response = await fetch(`https://api.github.com/repos/meetalva/alva/releases`);

		if (!response.ok) {
			this.setState({
				...this.state,
				version: { state: VersionState.Failed, value: undefined } as Version
			});
		}

		const releases = await (async (response: Response) => {
			try {
				return response.json();
			} catch (err) {
				console.error(err);
				return undefined;
			}
		})(response);

		if (!Array.isArray(releases)) {
			this.setState({
				...this.state,
				version: { state: VersionState.Failed, value: undefined } as Version
			});
		}

		const sorted = releases.sort((a: any, b: any) => semver.rcompare(a.tag_name, b.tag_name));
		const parsed = sorted.map((s: any) => semverUtils.parse(s.tag_name));

		const stable = parsed.filter((s: any) => !s.release);
		const alpha = parsed.filter((s: any) => s.release && s.release.split('.')[0] === 'alpha');
		// const beta = parsed.filter((s: any) => s.release && s.release.split('.')[0] === 'beta');

		const foundVersion = stable[0];
		const release = foundVersion ? sorted.find((s: any) => s.tag_name === foundVersion.semver) : undefined;

		if (!release) {
			this.setState({
				...this.state,
				version: { state: VersionState.Failed, value: undefined } as Version
			});
		}

		const asset = release.assets.find((a: any) => Path.extname(a.name).slice(1) === this.getFileExtension(this.getOS()));

		if (!asset) {
			this.setState({
				...this.state,
				version: { state: VersionState.Failed, value: undefined } as Version
			});
		} else {
			this.setState({
				...this.state,
				url: asset.browser_download_url,
				version: { state: VersionState.Fetched, value: foundVersion.version } as Version
			});
		}

		const alphaRelease = alpha[0] ? sorted.find((s: any) => s.tag_name === alpha[0].semver) : undefined;
		const alphaAsset = alphaRelease ? alphaRelease.assets.find((a: any) => Path.extname(a.name).slice(1) === this.getFileExtension(this.getOS())) : undefined;

		if (alphaAsset) {
			this.setState({
				...this.state,
				url: asset.browser_download_url,
				canaryUrl: alphaAsset.browser_download_url,
				version: { state: VersionState.Fetched, value: foundVersion.version } as Version
			});
		}
	}

	public render() {
		if (this.state.os === Os.Unknown && this.state.version.state === VersionState.Failed) {
			return (
				<a href={`https://github.com/meetalva/alva/releases/`} target="_blank" rel="noopener">
					<Button order={ButtonOrder.Primary}>Get Alva</Button>
				</a>
			);
		}

		if (this.state.ext === Extension.Unknown && this.state.version.state !== VersionState.Failed) {
			return (
				<a
					href={`https://github.com/meetalva/alva/releases/v${this.state.version.value}/`}
					target="_blank"
					rel="noopener"
					onClick={e => {
						if (this.state.version.state !== VersionState.Fetched) {
							e.preventDefault();
						}
					}}
				>
					<Button
						order={ButtonOrder.Primary}
						disabled={this.state.version.state !== VersionState.Fetched}
					>
						{this.state.version.state !== VersionState.Fetched ? (
							"Fetching release"
						) : (
							<>
								Get Alva
							</>
						)}
					</Button>
				</a>
			);
		}

		return (
			<a
				href={this.state.url}
				target="_blank"
				rel="noopener"
				onClick={e => {
					if (this.state.version.state !== VersionState.Fetched) {
						e.preventDefault();
					}
				}}
			>
				<Button
					order={ButtonOrder.Primary}
					disabled={this.state.version.state !== VersionState.Fetched}
				>
					{this.state.version.state !== VersionState.Fetched ? (
						"Fetching release"
					) : (
						<>
							Get Alva for {this.state.os}
						</>
					)}
				</Button>
				<Space size={SpaceSize.S} />
				{this.state.canaryUrl &&
					<Copy color={Color.Grey70} size={CopySize.Small}>
						<a href={this.state.canaryUrl} target="_blank" style={{ color: 'inherit' }}>
							Get Alva Canary for {this.state.os}
						</a>
					</Copy>
				}
				<Space size={SpaceSize.XL} />
			</a>
		);
	}
}
