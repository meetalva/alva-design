import * as React from "react";
import { Level } from "../../atoms/headline";
import Teaser from "./index";

export default function ButtonDemo() {
	return (
		<Teaser
			headlineText="Start your designs with Stacked"
			headlineLevel={Level.H1}
			copyText="Stacked is a radical tool to create systematic designs in a cross-functional team. The core are reusable components build with real web technologies, fully responsive to match any device."
			buttonLabel="Get started now"
		/>
	);
}
