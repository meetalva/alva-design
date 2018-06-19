import * as React from "react";
import { Level } from "../headline";
import Hero from "./index";

export default function ButtonDemo() {
	return (
		<Hero
			headlineLevel={Level.H1}
			headlineText="Start your designs with Stacked"
			copyText="Stacked is a radical tool to create systematic designs in a cross-functional team. The core are reusable components build with real web technologies, fully responsive to match any device."
		/>
	);
}
