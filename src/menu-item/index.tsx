import * as React from "react";
import styled from "styled-components";
import { Color } from "../colors";
import Copy from "../copy";

export interface MenuItemProps {
	/** @name Copy */ linkName?: string;
	/** @name Link */ onClick?: React.MouseEventHandler<HTMLButtonElement>;
}

const StyledMenuItem = styled(Copy)`
	color: ${Color.White};
	margin-left: 32px;
	cursor: pointer;

	&:first-of-type {
		margin: 0;
	}
`;

const MenuItem: React.StatelessComponent<MenuItemProps> = (props): JSX.Element => {
	return (
		<StyledMenuItem >
			{props.linkName}
		</StyledMenuItem>
	);
};

export default MenuItem;
