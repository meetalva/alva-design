import * as React from "react";
import styled, { css } from "styled-components";
import colors from "../colors";
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
				background: ${colors.blue.toString()};
				border: 1px solid ${colors.greenDark.toString()};
				color: ${colors.white.toString()};
				&:hover {
					background-color: ${colors.greenLight.toString()};
					border-color: ${colors.blue.toString()};
				}
				&:disabled {
					border-color: ${colors.grey70.toString()};
					background-color: ${colors.grey70.toString()};
				}
			`;
		} else {
			return css`
				background: ${colors.white.toString()};
				border: 1px solid ${colors.blue.toString()};
				color: ${colors.blue.toString()};
				&:hover {
					border-color: ${colors.greenLight.toString()};
					color: ${colors.greenLight.toString()};
				}
				&:disabled {
					border-color: ${colors.grey70.toString()};
					color: ${colors.grey70.toString()};
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
