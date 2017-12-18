import * as React from "react";
import styled from "styled-components";
import Button from "../../atoms/button";
import colors from "../../atoms/colors";
import Copy, { Size } from "../../atoms/copy";
import Headline from "../../atoms/headline";

export interface TeaserProps {
	/** @name Button label @default Label */ buttonLabel: string;
	/** @name Copy text @default Copytext */ copyText: string;
	/** @name Headline level @default H1 */ headlineLevel: Level;
	/** @name Headline align @default Left */ headlineAlign?: TextAlign;
	/** @name Headline text @default Headline */ headlineText: string;
	/** @hidden */ onClick?: React.MouseEventHandler<HTMLButtonElement>;
}

export enum Level {
	H1,
	H2,
	H3
}

export enum TextAlign {
	Left,
	Center,
	Right
}

const StyledTeaser = styled.div`
	padding: 30px;
	background: ${colors.white.toString()};
	border: 1px solid ${colors.grey90.toString()};
`;

const StyledHeadline = styled(Headline)`
	margin-bottom: 30px;
`;

const StyledCopy = styled(Copy)`
	margin-bottom: 30px;
`;

const Teaser: React.StatelessComponent<TeaserProps> = (props): JSX.Element => {
	return (
		<StyledTeaser>
			<StyledHeadline level={props.headlineLevel}>{props.headlineText}</StyledHeadline>
			<StyledCopy size={Size.Medium}>{props.copyText}</StyledCopy>
			<Button onClick={props.onClick} primary={true}>
				{props.buttonLabel}
			</Button>
		</StyledTeaser>
	);
};

export default Teaser;
