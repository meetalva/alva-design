import * as React from "react";
import styled, { css } from "styled-components";
import { Color } from "../colors";
import { fonts } from "../fonts";

export interface ButtonProps {
	/** @name Disabled @default false */
	disabled?: boolean;

	/** @name Primary @default true */
	order?: ButtonOrder;

	/** @name Color */
	color?: Color;

	onClick?: React.MouseEventHandler<HTMLDivElement>;
	children?: React.ReactNode;
}

export enum ButtonOrder {
	Primary,
	Secondary
}

const StyledButton = styled.div`
	padding: 12px 20px;
	min-width: 200px;
	font-size: 18px;
	font-family: ${fonts().NORMAL_FONT};
	border-radius: 3px;
	box-sizing: border-box;
	display: inline-block;

	@media screen and (min-width: 960px) {
		padding: 15px 30px;
	}

	${(props: ButtonProps) => {
		switch (props.order) {
			case ButtonOrder.Primary:
				return css`
					background: ${(props: ButtonProps) => props.color || Color.Pink};
					border: none;
					color: ${Color.White};
					&:hover {
						background-color: ${Color.PinkLight};
					}
					&:disabled {
						background-color: ${Color.Grey70};
					}
				`;
			case ButtonOrder.Secondary:
			default:
				return css`
				border: 1px solid ${(props: ButtonProps) => props.color || Color.Pink};
				color: ${(props: ButtonProps) => props.color || Color.Pink};
				&:hover {
					border-color: ${Color.PinkLight};
					color: ${Color.PinkLight};
				}
				&:disabled {
					border-color: ${Color.Grey70};
					color: ${Color.Grey70};
				}
			`;
		}
	}};
	}}} ${(props: ButtonProps) =>
			(props.onClick) && !props.disabled
				? css`
						cursor: pointer;
					`
				: ""};
`;

const Button: React.StatelessComponent<ButtonProps> = (props): JSX.Element => {
	return <StyledButton {...props}>{props.children}</StyledButton>;
};

export default Button;
