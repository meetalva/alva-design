import * as React from "react";
import styled from "@emotion/styled";
import { Color } from "../colors";
import { fonts } from "../fonts";
import { Image } from "../image";


export interface ButtonProps {
	/** @name Disabled @default false */
	disabled?: boolean;

	/** @name Order */
	order?: ButtonOrder;

	/** @name Color */
	color?: Color;

	/** @asset @name Icon */
	icon?: string;

	onClick?: React.MouseEventHandler<HTMLDivElement>;
	children?: React.ReactNode;
}

export enum ButtonOrder {
	Primary = 'button-primary',
	Secondary = 'button-secondary'
}

const StyledButton = styled.div<ButtonProps>`
	display: flex;
	align-items: center;
	font-size: 20px;
	font-family: ${fonts().NORMAL_FONT};
	font-weight: 500;
	cursor: ${props => (!props.disabled ? "pointer" : "default")};
`;

const ButtonPrimary = styled.div<ButtonProps>`
	color: ${Color.Pink};
`;

const ButtonSecondary = styled.div<ButtonProps>`
`;

const StyledImage = styled(Image)`
	display: inline-block;
	width: 26px;
	height: 26px;
	padding-right: 8px;

`;

/**
 * @icon MinusSquare
 */
export const Button: React.StatelessComponent<ButtonProps> = (props): JSX.Element => {
	const button = props.order === ButtonOrder.Primary ? ButtonPrimary : ButtonSecondary;
	const Component = StyledButton.withComponent(button);
	return <Component {...props}><StyledImage src={props.icon} />{props.children}</Component>;
};
