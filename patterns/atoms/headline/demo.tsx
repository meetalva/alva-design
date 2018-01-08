import * as React from "react";
import Headline, { Level, TextAlign } from "./index";

const HeadlineDemo: React.StatelessComponent<void> = (): JSX.Element => {
	return (
		<div>
			<Headline level={Level.H1}>Headline Order 1</Headline>
			<Headline level={Level.H2}>Headline Order 2</Headline>
			<Headline level={Level.H3}>Headline Order 3</Headline>
			<Headline level={Level.H1} uppercase>
				Headline Order 1
			</Headline>
			<Headline level={Level.H3} textAlign={TextAlign.Center}>
				Headline Order 3
			</Headline>
		</div>
	);
};

export default HeadlineDemo;
