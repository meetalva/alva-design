import * as React from "react";
import { Color } from "../colors";
import { fonts } from '../fonts';

export interface LinkProps {
	/** @name Color */
	color?: Color;

	onClick?: React.MouseEventHandler<HTMLDivElement>;
	children?: React.ReactNode;
}

export const Link: React.StatelessComponent<LinkProps> = (props): JSX.Element => {
	return (
		<div onClick={props.onClick} style={{
			display: 'inline-block',
			color: props.color || 'inherit',
			fontFamily: fonts().NORMAL_FONT
		}}>
			{props.children}
		</div>
	);
};

