import * as React from "react";
import { Color } from "../colors";
import { fonts } from '../fonts';

export interface LinkProps {
	/** @name Color */
	color?: Color;

	onClick?: React.MouseEventHandler<HTMLAnchorElement>;
	children?: React.ReactNode;
	href?: string;
}

export const Link: React.StatelessComponent<LinkProps> = (props): JSX.Element => {
	return (
		<a onClick={props.onClick} style={{
			display: 'inline-block',
			color: props.color || 'inherit',
			fontFamily: fonts().NORMAL_FONT,
			cursor: 'pointer',
			href: props.href,
			textDecoration: 'none'
		}}>
			{props.children}
		</a>
	);
};

