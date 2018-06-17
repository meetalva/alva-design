import * as React from "react";
import styled from "styled-components";
import colors from "../../atoms/colors";

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

const StyledBurger = styled.div`
	width: 20px;
	height: 20px;
	background-color: ${colors.white.toString()};
	margin-left: 50px;
	display: none;

	@media screen and (max-width: 720px) {
		display: block;
	}
`;

const Menu: React.StatelessComponent<HeaderProps> = (props): JSX.Element => {
	return (
		<StyledMenu>
			{props.children}
			<StyledBurger />
		</StyledMenu>
	);
};

export default Menu;
