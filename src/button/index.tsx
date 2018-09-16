import * as React from "react";
import styled, { css } from "styled-components";
import { Color } from "../colors";
import { fonts } from "../fonts";

export interface ButtonProps {
	/** @name Disabled @default false */
	disabled?: boolean;

	/** @name Primary @default true */
	order?: ButtonOrder;

	onClick?: React.MouseEventHandler<HTMLButtonElement>;
	children?: React.ReactNode;
}

export enum ButtonOrder {
	Primary,
	Secondary
}

const StyledButton = styled.button`
	padding: 12px 20px;
	min-width: 200px;
	font-size: 18px;
	font-family: ${fonts().NORMAL_FONT};
	border-radius: 3px;
	box-sizing: border-box;

	@media screen and (min-width: 960px) {
		padding: 15px 30px;
	}

	${(props: ButtonProps) => {
		switch (props.order) {
			case ButtonOrder.Primary:
				return css`
					background: ${Color.Pink};
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
				background: ${Color.White};
				border: 1px solid ${Color.Pink};
				color: ${Color.Pink};
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
