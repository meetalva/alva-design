import * as React from "react";
import styled, { css } from "styled-components";
import colors from "../../atoms/colors";
import Image from "../../atoms/image";
import Menu from "../../molecules/menu";

/**
 * @name Header
 */
export interface HeaderProps {
	/** @asset @name Logo */ logo?: string;
	/** @name Sticky @default false */ sticky?: boolean;

	children?: React.ReactNode;
}

const StyledHeader = styled.div`
	display: flex;
	justify-content: space-between;
	align-items: center;
	padding: 20px;
	box-sizing: border-box;
	background-color: ${colors.black.toString()};
	color: ${colors.white.toString()};
	text-align: left;
	width: 100%;

	${(props: HeaderProps) => {
		if (props.sticky) {
			return css`
				position: sticky;
				top: -1px;
			`;
		} else {
			return css``;
		}
	}}}
`;

const StyledImage = styled(Image)`
	display: block;
	height: 50px;
`;

const Header: React.StatelessComponent<HeaderProps> = (props): JSX.Element => {
	return (
		<StyledHeader {...props}>
			<StyledImage size="50px" src={props.logo} />
				<Menu>
					{props.children}
				</Menu>
		</StyledHeader>
	);
};

export default Header;