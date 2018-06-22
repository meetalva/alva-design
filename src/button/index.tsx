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
	box-sizing: border-box;

	${(props: ButtonProps) => {
		if (props.primary) {
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
		} else {
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
