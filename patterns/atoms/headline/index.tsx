import * as React from 'react';
import styled, { css, StyledComponentClass } from 'styled-components';
import { fonts } from '../fonts';

export interface HeadlineProps {
	/** @name CSS class @hidden */ className?: string;
	/** @name Level @default H1 */ level: Level;
	/** @name Text align @default Left */ textAlign?: TextAlign;
	/** @name Text @default Lorem ipsum */ text?: string;
	/** @name Color @default #000000 */ color?: string;
	/** @name Uppercase @default false */ uppercase?: boolean;
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
	color: ${(props: HeadlineProps) => props.color || 'inherit'};

	${(props: HeadlineProps) => {
		switch (props.level) {
			case Level.H3:
				return css`
					font-size: 18px;
					line-height: 24px;
				`;
			case Level.H2:
				return css`
					font-size: 30px;
					line-height: 36px;
				`;
			case Level.H1:
			default:
				return css`
					font-size: 42px;
					line-height: 54px;
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

	${(props: HeadlineProps) =>
		props.uppercase
			? `letter-spacing: 1px;
				text-transform: uppercase;`
			: ''};
`;

const Headline: React.StatelessComponent<HeadlineProps> = props => {
	let tagName: string = 'h1';
	switch (props.level) {
		case Level.H3:
			tagName = 'h3';
			break;
		case Level.H2:
			tagName = 'h2';
			break;
		case Level.H1:
			tagName = 'h1';
			break;
	}
	const Component: StyledComponentClass<
		HeadlineProps,
		HeadlineProps
	> = StyledHeadline.withComponent(tagName as keyof JSX.IntrinsicElements);

	const { text, children } = props;

	return (
		<Component {...props}>
			{text}
			{children}
		</Component>
	);
};

export default Headline;
