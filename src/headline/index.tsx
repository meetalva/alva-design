import * as React from 'react';
import styled, { css, StyledComponentClass } from 'styled-components';
import { fonts } from '../fonts';
import * as Types from '../types';
import { Color } from '../colors';

export interface HeadlineProps {
	/** @name CSS class @ignore */ className?: string;
	/** @name Level @default H1 */ level: HeadlineLevel;
	/** @name Text align @default Left */ textAlign?: Types.TextAlign;
	/** @name Color @default #000000 */ color?: string;
	/** @name Uppercase @default false */ uppercase?: boolean;
	/** @name Weight @default bold */ fontWeight?: Types.FontWeight;
	children?: React.ReactNode;
}

export enum HeadlineLevel {
	H1,
	H2,
	H3
}

const StyledHeadline = styled.div`
	margin: 0;
	font-family: ${fonts().NORMAL_FONT};
	color: ${(props: HeadlineProps) => props.color || 'inherit'};
	line-height: 1.3;

	u {
    	text-decoration-color: ${Color.Red};
	}

	${(props: HeadlineProps) => {
		switch (props.fontWeight) {
			case Types.FontWeight.Light:
				return css`
					font-weight: 100;
				`;
			case Types.FontWeight.Regular:
				return css`
					font-weight: 300;
				`;
			case Types.FontWeight.Bold:
			default:
				return css`
					font-weight: 500;
				`;
		}
	}};

	${(props: HeadlineProps) => {
		switch (props.level) {
			case HeadlineLevel.H3:
				return css`
					font-size: 24px;

					@media screen and (min-width: 960px) {
						font-size: 32px;
					}
				`;
			case HeadlineLevel.H2:
				return css`
					font-size: 32px;

					@media screen and (min-width: 450px) {
						font-size: 48px;
					}
					@media screen and (min-width: 960px) {
						font-size: 54px;
					}
				`;
			case HeadlineLevel.H1:
			default:
				return css`
					font-size: 48px;

					@media screen and (min-width: 450px) {
						font-size: 64px;
					}
					@media screen and (min-width: 960px) {
						font-size: 96px;
					}
				`;
		}
	}};

	${(props: HeadlineProps) => {
		switch (props.textAlign) {
			case Types.TextAlign.Center:
				return css`
					text-align: center;
				`;
			case Types.TextAlign.Right:
				return css`
					text-align: right;
				`;
			case Types.TextAlign.Left:
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

const getComponent = (level: HeadlineLevel): HeadlineComponent =>  {
	return StyledHeadline.withComponent(getTagName(level));
}

const getTagName = (level: HeadlineLevel): 'h1' | 'h2' | 'h3' => {
	switch (level) {
		case HeadlineLevel.H3:
			return 'h3';
		case HeadlineLevel.H2:
			return 'h2';
		case HeadlineLevel.H1:
		default:
			return 'h1';
	}
}

export default Headline;
