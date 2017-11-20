import * as React from 'react';
import styled, { css } from 'styled-components';
import colors from 'colors';

export interface ButtonProps {
	order?: Order;
 }

export enum Order {
	Primary,
	Secondary
 }

 
const StyledButton = styled.button`
 	padding: 10px 20px;

	${(props: ButtonProps) => {
		switch (props.order) {
		  case Order.Secondary:
			 return css`
				background: ${colors.white};
				color: ${colors.greenDark};
			 `
		  case Order.Primary:
		  default:
			return css`
				background: ${colors.greenDark};
				color: ${colors.white};
			`
		}
	 }}
`;

const Button: React.StatelessComponent<ButtonProps> = (props): JSX.Element => {
	return (
		<StyledButton order={props.order}>
			{props.children}
		</StyledButton>
	);
};

export default Button;
