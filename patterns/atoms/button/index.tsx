import * as React from 'react';
import styled, { css } from 'styled-components';
import colors from 'colors';
import {fonts} from 'fonts';

export interface ButtonProps {
	disabled?: boolean;
	order?: Order;

	onClick?: React.MouseEventHandler<HTMLButtonElement>;
	onMouseDown?: React.MouseEventHandler<HTMLButtonElement>;
}

export enum Order {
	Primary,
	Secondary
}

const StyledButton = styled.button`
	padding: 15px 30px;
	min-width: 200px;
	font-size: 18px;
	font-family: ${fonts().NORMAL_FONT};

	${(props: ButtonProps) => {
		switch (props.order) {
			case Order.Secondary:
				return css`
					background: ${colors.white.toString()};
					border: 1px solid ${colors.green.toString()};
					color: ${colors.green.toString()};
					&:hover {
						border-color: ${colors.greenLight.toString()};
						color: ${colors.greenLight.toString()};
					}
					&:disabled {
						border-color: ${colors.grey70.toString()};
						color: ${colors.grey70.toString()};
					}
				`
		  case Order.Primary:
		  default:
				return css`
					background: ${colors.green.toString()};
					border: 1px solid ${colors.greenDark.toString()};
					color: ${colors.white.toString()};
					&:hover {
						background-color: ${colors.greenLight.toString()};
						border-color: ${colors.green.toString()};
					}
					&:disabled {
						border-color: ${colors.grey70.toString()};
						background-color: ${colors.grey70.toString()};
					}
				`
			}
	}}

	${(props: ButtonProps) => (props.onClick || props.onMouseDown) && props.disabled === false
		? css`
				cursor: pointer;
			`
		: ''
	}
`;

const Button: React.StatelessComponent<ButtonProps> = (props): JSX.Element => {
	return (
		<StyledButton
			order={props.order}
			disabled={Boolean(props.disabled)}
			onClick={props.onClick}
			onMouseDown={props.onMouseDown}
			>
			{props.children}
		</StyledButton>
	);
};

export default Button;
