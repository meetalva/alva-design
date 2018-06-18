import * as React from "react";
import styled, { css } from "styled-components";
import { Color } from "../colors";
import { fonts } from "../fonts";

/**
 * @name Button
 */
export interface ButtonProps {
	/** @name Disabled @default false */ disabled?: boolean;
	/** @name Primary @default true */ primary?: boolean;

	/** @ignore */ onClick?: React.MouseEventHandler<HTMLButtonElement>;
	/** @ignore */ onMouseDown?: React.MouseEventHandler<HTMLButtonElement>;

	children?: React.ReactNode;
}

const StyledButton = styled.button`
	padding: 15px 30px;
	min-width: 200px;
	font-size: 18px;
	font-family: ${fonts().NORMAL_FONT};
	border-radius: 3px;

	${(props: ButtonProps) => {
		if (props.primary) {
			return css`
				background: ${Color.Green};
				border: 1px solid ${Color.GreenDark};
				color: ${Color.White};
				&:hover {
					background-color: ${Color.GreenLight};
					border-color: ${Color.Green};
				}
				&:disabled {
					border-color: ${Color.Grey70};
					background-color: ${Color.Grey70};
				}
			`;
		} else {
			return css`
				background: ${Color.White};
				border: 1px solid ${Color.Green};
				color: ${Color.Green};
				&:hover {
					border-color: ${Color.GreenLight};
					color: ${Color.GreenLight};
				}
				&:disabled {
					border-color: ${Color.Grey70};
					color: ${Color.Grey70};
				}
			`;
		}
	}}} ${(props: ButtonProps) =>
			(props.onClick || props.onMouseDown) && !props.disabled
				? css`
						cursor: pointer;
					`
				: ""};
`;

const Button: React.StatelessComponent<ButtonProps> = (props): JSX.Element => {
	return <StyledButton {...props}>{props.children}</StyledButton>;
};

export default Button;
