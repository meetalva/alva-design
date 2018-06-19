import * as React from "react";
import styled from "styled-components";
<<<<<<< HEAD:src/menu-item/index.tsx
import colors from "../colors";
import Copy from "../copy";
=======
import { Color } from "../../atoms/colors";
import Copy from "../../atoms/copy";
>>>>>>> master:src/molecules/menu-item/index.tsx

export interface MenuItemProps {
	/** @name Copy */ linkName?: string;
	/** @name Link */ onClick?: React.MouseEventHandler<HTMLButtonElement>;
	/** @ignore */ onMouseDown?: React.MouseEventHandler<HTMLButtonElement>;
}

const StyledMenuItem = styled(Copy)`
	color: ${Color.White};
	margin-left: 32px;
	cursor: pointer;

	&:first-of-type {
		margin: 0;
	}

	@media screen and (max-width: 720px) {
		display: none;
	}
`;

const MenuItem: React.StatelessComponent<MenuItemProps> = (props): JSX.Element => {
	return (
		<StyledMenuItem>
			{props.linkName}
		</StyledMenuItem>
	);
};

export default MenuItem;
