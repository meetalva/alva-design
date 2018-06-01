import * as React from 'react';
import styled, { css, StyledComponentClass } from 'styled-components';
import { fonts } from '../fonts';

export interface HeadlineProps {
	/** @name CSS class @ignore */ className?: string;
	/** @name Level @default H1 */ level: Level;
	/** @name Text align @default Left */ textAlign?: TextAlign;
	/** @name Color @default #000000 */ color?: string;
	/** @name Uppercase @default false */ uppercase?: boolean;
	children?: React.ReactNode;
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

type HeadlineComponent = StyledComponentClass<HeadlineProps, HeadlineProps>;

const Headline: React.StatelessComponent<HeadlineProps> = props => {
	const Component: HeadlineComponent = getComponent(props.level);

	return (
		<Component {...props}>
			{props.children}
		</Component>
	);
};

const getComponent = (level: Level): HeadlineComponent =>  {
	return StyledHeadline.withComponent(getTagName(level));
}

const getTagName = (level: Level): 'h1' | 'h2' | 'h3' => {
	switch (level) {
		case Level.H3:
			return 'h3';
		case Level.H2:
			return 'h2';
		case Level.H1:
		default:
			return 'h1';
	}
}

export default Headline;
