import * as React from "react";
import styled from "styled-components";
import { Color } from "../colors";
import Copy from "../copy";
import Headline, { HeadlineLevel } from "../headline";
import * as Types from '../types';

export interface HeroProps {
	/** @name Copy text */ copyText: string;
	/** @name Headline level */ headlineLevel: HeadlineLevel;
	/** @name Headline align */ headlineAlign?: Types.TextAlign;
	/** @name Headline text */ headlineText: string;
}

const StyledHero = styled.div`
	padding: 30px;
	background: ${Color.Blue};
	color: ${Color.White};
	text-align: center;
`;

const Teaser: React.StatelessComponent<HeroProps> = (props): JSX.Element => {
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
