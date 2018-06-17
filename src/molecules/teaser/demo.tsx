import Button from "../../atoms/button";
import Headline, { Level } from "../../atoms/headline";
import * as React from "react";
import Teaser from "./index";

export default function ButtonDemo() {
	return (
		<Teaser headline={
			<Headline level={Level.H1}>Start your designs with Stacked</Headline>
		}
		button={
			<Button>Start your designs with Stacked</Button>
		} />
	);
}