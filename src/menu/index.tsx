import * as React from 'react';
import styled, { css } from 'styled-components';
import { Color } from '../colors';
import Image from '../image';
var MenuIcon = require('react-feather/dist/icons/menu').default;

export interface MenuProps {
	/** @asset @name Logo */ logo?:
	string;
	
	/** @name Sticky @default false */
	sticky?: boolean;

	children?: React.ReactNode;
}

const StyledMenu = styled.div`
	display: flex;
	justify-content: space-between;
	align-items: center;
	padding: 20px;
	box-sizing: border-box;
	background-color: ${Color.Black};
	color: ${Color.White};

	${(props: MenuProps) => {
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

const StyledMenuInner = styled.div`
	display: flex;
`;

const StyledMenuIcon = styled(MenuIcon) `
	display: none;

	@media screen and (max-width: 720px){
		display: block;
	}
`;

const Menu: React.StatelessComponent<MenuProps> = (props): JSX.Element => {
	return (
		<StyledMenu {...props}>
			<StyledImage size="50px" src={props.logo} />
				<StyledMenuInner>
					{props.children}
					<StyledMenuIcon />
				</StyledMenuInner>
		</StyledMenu>
	);
};

export default Menu;
