const fs = require('fs');

const logo = fs.readFileSync('./static/logo.svg', 'utf-8');
const favicon = fs.readFileSync('./static/favicon.svg', 'utf-8');

module.exports = {
	docs: ["README.md"],
	entry: ["lib/**/*.demo.js"],
	render: "@patternplate/render-styled-components/render",
	mount: "@patternplate/render-styled-components/mount",
	ui: {
		logo,
		favicon,
		colorBackgroundDark: "rgb(0, 0, 0)",
		colorBackgroundSecondaryDark: "rgb(10, 10, 10)",
		colorBackgroundTertiaryDark: "rgb(10, 10, 10)",
		colorBorderDark: "rgb(10, 10, 10)",
		colorTextDark: "rgb(242, 242, 242)",
		colorRecessDark: "rgb(153, 153, 153)",
		colorActive: "rgb(215, 0, 82)",
		showComponents: process.env.NODE_ENV !== "production"
	}
};
