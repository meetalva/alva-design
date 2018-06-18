import * as React from "react";
import styled from "styled-components";
import { Color } from "../../atoms/colors";
import Copy, { Size as CopySize } from "../../atoms/copy";
import Headline, { Level, TextAlign } from "../../atoms/headline";

export interface TeaserProps {
	/** @name Copy text */ copyText: string;
	/** @name Headline level */ headlineLevel: Level;
	/** @name Headline align */ headlineAlign?: TextAlign;
	/** @name Headline text */ headlineText: string;
}

const StyledHero = styled.div`
	padding: 30px;
	background: ${Color.Blue};
	color: ${Color.White};
	text-align: center;
`;

const Teaser: React.StatelessComponent<TeaserProps> = (props): JSX.Element => {
	return (
		<StyledHero>
			<Headline level={props.headlineLevel} textAlign={props.headlineAlign}>
				{props.headlineText}
			</Headline>
			<Copy size={CopySize.Medium}>{props.copyText}</Copy>
		</StyledHero>
	);
};

export default Teaser;
