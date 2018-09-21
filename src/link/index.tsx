import * as React from "react";
import styled from "styled-components";
import { Color } from "../colors";

export interface LinkProps {
	/** @name Color */
	color?: Color;

	onClick?: React.MouseEventHandler<HTMLDivElement>;
	children?: React.ReactNode;
}

const StyledLink = styled.div`
	color: ${(props: LinkProps) => props.color || 'inherit'};
`;

const Link: React.StatelessComponent<LinkProps> = (props): JSX.Element => {
	return (
		<StyledLink {...props}>
			{props.children}
		</StyledLink>
	);
};

export default Link;
