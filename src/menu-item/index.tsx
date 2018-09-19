import * as React from "react";
import styled from "styled-components";
import { Color } from "../colors";
import Copy from "../copy";

export interface MenuItemProps {
	/** @name Copy */ linkName?: string;
	/** @name Link */ onClick?: React.MouseEventHandler<HTMLDivElement>;
	href?: string;
	target?: string;
	rel?: string;
	title?: string;
}

const StyledMenuItem = styled(Copy)`
	color: ${Color.White};
	margin-left: 32px;
	cursor: pointer;
`;

const MenuItem: React.StatelessComponent<MenuItemProps> = (props): JSX.Element => {
	return (
		<a href={props.href} target={props.target} rel={props.rel} title={props.title}>
			<StyledMenuItem>
				{props.linkName}
			</StyledMenuItem>
		</a>
	);
};

export default MenuItem;
