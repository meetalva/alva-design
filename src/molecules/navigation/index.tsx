import * as React from "react";
import styled, { css } from "styled-components";
import { Color } from "../../atoms/colors";
import Image from "../../atoms/image";
var MenuIcon = require('react-feather/dist/icons/menu').default;

/**
 * @name Navigation
 */
export interface NavigationProps {
	/** @asset @name Logo */ logo?: string;
	/** @name Sticky @default false */ sticky?: boolean;

	children?: React.ReactNode;
}

const StyledNavigation = styled.div`
	display: flex;
	justify-content: space-between;
	align-items: center;
	padding: 20px;
	box-sizing: border-box;
	background-color: ${Color.Black};
	color: ${Color.White};

	${(props: NavigationProps) => {
		if (props.sticky) {
			return css`
				position: sticky;
				top: 0;
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

const StyledMenu = styled.div`
	display: flex;
`;

const StyledMenuIcon = styled(MenuIcon) `
	display: none;

	@media screen and (max-width: 720px){
		display: block;
	}
`;

const Navigation: React.StatelessComponent<NavigationProps> = (props): JSX.Element => {
	return (
		<StyledNavigation {...props}>
			<StyledImage size="50px" src={props.logo} />
				<StyledMenu>
					{props.children}
					<StyledMenuIcon />
				</StyledMenu>
		</StyledNavigation>
	);
};

export default Navigation;
