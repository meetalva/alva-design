import * as React from "react";
import styled, { css, StyledComponentClass } from "styled-components";
import { fonts } from "../fonts";

export interface HeadlineProps {
	/**
	 * @name CSS class
	 */
	className?: string;
	/**
	 * @name Order
	 */
	order?: 1 | 2 | 3;
	/**
	 * @name Tag name
	 */
	tagName?: "h1" | "h2" | "h3" | "h4" | "h5" | "h6" | "div";
	/**
	 * @name Text Align
	 */
	textAlign?: TextAlign;
}

interface StyledHeadlineProps {
	className?: string;
	order?: 1 | 2 | 3;
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
		switch (props.order) {
			case 3:
				return css`
					font-size: 24px;
					line-height: 30px;
				`;
			case 2:
				return css`
					font-size: 38px;
					line-height: 45px;
				`;
			case 1:
			default:
				return css`
					font-size: 52px;
					line-height: 60px;
				`;
		}
	}};

	${(props: HeadlineProps) => {
		switch (props.textAlign) {
			case TextAlign.Center:
				return css`
					text-align: center;
				`
			case TextAlign.Right:
				return css`
					text-align: right;
				`
			case TextAlign.Left:
			default:
				return css`
					text-align: left;
				`
		}
  }};
`;

const Headline: React.StatelessComponent<HeadlineProps> = props => {
	const tagName = props.tagName === undefined ? "div" : props.tagName;
	const Component: StyledComponentClass<
		StyledHeadlineProps,
		HeadlineProps
	> = StyledHeadline.withComponent(tagName);

	return (
		<Component className={props.className} order={props.order} textAlign={props.textAlign}>
			{props.children}
		</Component>
	);
};

export default Headline;
