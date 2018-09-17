import * as React from "react";
import styled from "styled-components";
import { Color } from "../colors";
import Copy, { Size as CopySize } from "../copy";
import Headline, { HeadlineLevel } from "../headline";
import Space, { SpaceSize } from '../space';
import AppFrame from '../app-frame';

export interface FeatureProps {
	/** @name Layout */
	layout: Layout;

	/** @name Feature level */
	featureLevel: FeatureLevel;

	/** @name Headline */
	headline: string;

	/** @name Copy */
	copy: string;

	/** @name Frame */
	frame: React.ReactNode;

	/** @name NegativeTop */
	negativeTop?: boolean;
}

export enum FeatureLevel {
	Large,
	Medium
}

export enum Layout {
	Left,
	Center,
	Right
}

const Wrapper = styled.div`
	width: 90%;
	max-width: 1280px;
	${(props: FeatureProps) => (props.layout === Layout.Center) ? `
		display: block;
	` : `
		display: block;
		@media screen and (min-width: 960px) {
			display: flex;
		}
	`};
	margin: 0 auto;
	${(props: FeatureProps) => props.negativeTop && 'margin-top: -100px;' || ''}
	position: relative;
`;

const StyledAppFrame = styled(AppFrame)`

	${(props: FeatureProps) => {
		switch (props.layout) {
			case Layout.Left: return `
				@media screen and (min-width: 960px) {
					transform: translate(50%,0);
				}
			`;
			case Layout.Right: return `
				@media screen and (min-width: 960px) {
					transform: translate(-50%,0);
				}
			`;
			default: case Layout.Center: return '';
		}
	}};

	img {
		width: 100%;
	}
`;

const StyledBox = styled.div`
	width: 80%;

	@media screen and (min-width: 960px) {
		width: 40%;
	}

	padding-top: 60px;
	text-align: center;

	${(props: FeatureProps) =>
		props.layout === Layout.Center
		? `


		` : `
			@media screen and (min-width: 960px) {
				position: absolute;
				top: 50%;
				transform: translate(0,-50%);
				text-align: left;
				padding-top: 0;
			}
		`};

	${(props: FeatureProps) => (props.layout === Layout.Right) ? `
		@media screen and (min-width: 960px) {
			left: 60%;
		}
	` : ''};
	color: ${Color.Black};
	max-width: 480px;
	margin: 0 auto;

`;

const StyledCopy = styled(Copy)`
	color: ${Color.Grey50};
`;

const Feature: React.StatelessComponent<FeatureProps> = (props): JSX.Element => {
	return (
		<div>
			<Wrapper {...props}>
				<StyledAppFrame {...props}>
					{props.frame}
				</StyledAppFrame>
				<StyledBox {...props}>
					<Headline level={HeadlineLevel.H3}>
						{props.headline}
					</Headline>
					<Space size={SpaceSize.S} />
					<StyledCopy size={CopySize.Medium}>
						{props.copy}
					</StyledCopy>
				</StyledBox>
			</Wrapper>
		</div>
	);
};

export default Feature;
