import * as React from "react";
import styled from "styled-components";
import colors from "../../atoms/colors";
import Copy from "../../atoms/copy";

export interface HeaderProps {
	/** @name Copy */ linkName?: string;
	/** @name Link */ onClick?: React.MouseEventHandler<HTMLButtonElement>;
	/** @ignore */ onMouseDown?: React.MouseEventHandler<HTMLButtonElement>;
}

const StyledMenuItem = styled(Copy)`
	color: ${colors.white.toString()};
	margin-left: 32px;
	&:first-of-type {
		margin: 0;
	}
	@media screen and (max-width: 720px) {
		display: none;
	}
`;

const Menu: React.StatelessComponent<HeaderProps> = (props): JSX.Element => {
	return (
		<StyledMenuItem>
			{props.linkName}
		</StyledMenuItem>
	);
};

export default Menu;
