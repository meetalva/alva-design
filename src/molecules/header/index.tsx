import * as React from "react";
import styled from "styled-components";
import colors from "../../atoms/colors";

export interface HeaderProps {
	/** @name Logo */ logo?: string;
	/** @name Copy */ copyText?: string;
}

const StyledHeader = styled.div`
	display: block;
	padding: 20px;
	box-sizing: border-box;
	background-color: ${colors.black.toString()};
	color: ${colors.white.toString()};
	text-align: left;
	width: 100%;
`;

const Header: React.StatelessComponent<HeaderProps> = (props): JSX.Element => {
	return (
		<StyledHeader>
			{props.children}
		</StyledHeader>
	);
};

export default Header;
