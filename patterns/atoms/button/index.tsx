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
					background: ${colors.white};
					border: 1px solid ${colors.green};
					color: ${colors.green};
					&:hover {
						border-color: ${colors.greenLight};
						color: ${colors.greenLight};
					}
					&:disabled {
						border-color: ${colors.grey70};
						color: ${colors.grey70};
					}
				`
		  case Order.Primary:
		  default:
				return css`
					background: ${colors.green};
					border: 1px solid ${colors.greenDark};
					color: ${colors.white};
					&:hover {
						background-color: ${colors.greenLight};
						border-color: ${colors.green};
					}
					&:disabled {
						border-color: ${colors.grey70};
						background-color: ${colors.grey70};
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
