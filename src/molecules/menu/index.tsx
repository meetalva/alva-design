import * as React from "react";
import styled from "styled-components";
import colors from "../../atoms/colors";
import { Menu as MenuIcon } from "react-feather";

export interface HeaderProps {
	children?: React.ReactNode;
}

const StyledMenu = styled.div`
	display: flex;
	justify-content: flex-start;
	align-items: center;
	margin: 10px;
	width: auto;
	color: ${colors.white.toString()};
`;

const StyledMenuIcon = styled(MenuIcon) `
	margin-left: 50px;
`;

const Menu: React.StatelessComponent<HeaderProps> = (props): JSX.Element => {
	return (
		<StyledMenu>
			{props.children}
			<StyledMenuIcon />
		</StyledMenu>
	);
};

export default Menu;
