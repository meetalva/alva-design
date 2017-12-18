import * as React from "react";
import styled, { css, StyledComponentClass } from "styled-components";
import { fonts } from "../fonts";

export interface HeadlineProps {
	/** @name CSS class @hidden */ className?: string;
	/** @name Level @default H1 */ level: Level;
	/** @name Text align @default Left */ textAlign?: TextAlign;
	/** @name Text @default Lorem ipsum */ text?: string;
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

const StyledHeadline = styled.div`
	margin-top: 0;
	font-family: ${fonts().NORMAL_FONT};
	font-weight: 500;

	${(props: HeadlineProps) => {
		switch (props.level) {
			case Level.H3:
				return css`
					font-size: 24px;
					line-height: 30px;
				`;
			case Level.H2:
				return css`
					font-size: 38px;
					line-height: 45px;
				`;
			case Level.H1:
			default:
				return css`
					font-size: 52px;
					line-height: 60px;
					font-weight: 700;
				`;
		}
	}};

	${(props: HeadlineProps) => {
		switch (props.textAlign) {
			case TextAlign.Center:
				return css`
					text-align: center;
				`;
			case TextAlign.Right:
				return css`
					text-align: right;
				`;
			case TextAlign.Left:
				return css`
					text-align: left;
				`;
			default:
				return css`
					text-align: inherit;
				`;
		}
	}};
`;

const Headline: React.StatelessComponent<HeadlineProps> = props => {
	let tagName: string = "h1";
	switch (props.level) {
		case Level.H3:
			tagName = "h3";
			break;
		case Level.H2:
			tagName = "h2";
			break;
		case Level.H1:
			tagName = "h1";
			break;
	}
	const Component: StyledComponentClass<
		HeadlineProps,
		HeadlineProps
	> = StyledHeadline.withComponent(tagName as keyof JSX.IntrinsicElements);

	return (
		<Component {...props}>
			{props.text}
			{props.children}
		</Component>
	);
};

export default Headline;
