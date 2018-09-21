import * as React from "react";
import styled from "styled-components";
import { Color } from "../colors";
import { fonts } from '../fonts';

export interface LinkProps {
	/** @name Color */
	color?: Color;

	onClick?: React.MouseEventHandler<HTMLDivElement>;
	children?: React.ReactNode;
}

const StyledLink = styled.div`
	color: ${(props: LinkProps) => props.color || 'inherit'};
	font-family: ${fonts().NORMAL_FONT};
`;

const Link: React.StatelessComponent<LinkProps> = (props): JSX.Element => {
	return (
		<StyledLink {...props}>
			{props.children}
		</StyledLink>
	);
};

export default Link;
