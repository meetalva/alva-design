import * as React from "react";
import styled from "styled-components";
import { Color } from "../colors";
import Copy from "../copy";

export interface MenuItemProps {
	/** @name Copy */ linkName?: string;
	/** @name Link */ onClick?: React.MouseEventHandler<HTMLDivElement>;
}

const StyledMenuItem = styled(Copy)`
	color: ${Color.White};
	margin-left: 32px;
	cursor: pointer;
`;

const MenuItem: React.StatelessComponent<MenuItemProps> = (props): JSX.Element => {
	return (
		<div onClick={props.onClick}>
			<StyledMenuItem>
				{props.linkName}
			</StyledMenuItem>
		</div>
	);
};

export default MenuItem;
