import * as React from "react";
import styled from "styled-components";
import colors from "../colors";
import Copy from "../copy";
import Headline, { Level, TextAlign } from "../headline";

export interface TeaserProps {
	/** @name Copy text */ copyText: string;
	/** @name Headline level */ headlineLevel: Level;
	/** @name Headline align */ headlineAlign?: TextAlign;
	/** @name Headline text */ headlineText: string;
}

const StyledHero = styled.div`
	padding: 30px;
	background: ${colors.blue.toString()};
	color: ${colors.white.toString()};
	text-align: center;
`;

const Teaser: React.StatelessComponent<TeaserProps> = (props): JSX.Element => {
	return (
		<StyledHero>
			<Headline level={props.headlineLevel} textAlign={props.headlineAlign}>
				{props.headlineText}
			</Headline>
			<Copy>{props.copyText}</Copy>
		</StyledHero>
	);
};

export default Teaser;
