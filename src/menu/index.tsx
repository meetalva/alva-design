import * as React from 'react';
import styled, { css } from 'styled-components';
import { Color } from '../colors';
import Image from '../image';
import Layout from '../layout';

export interface MenuProps {
	/** @asset @name Logo */
	logo?: string;

	/** @name Sticky @default false */
	sticky?: boolean;

	children?: React.ReactNode;
}

const StyledWrapper = styled(Layout)`
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

const StyledMenu = styled.div`
	display: flex;
	justify-content: space-between;
	align-items: center;
	padding: 20px 0;
	box-sizing: border-box;
	color: ${Color.White};
`;

const StyledImage = styled(Image)`
	display: block;
	height: 50px;
`;

const StyledMenuInner = styled.div`
	display: flex;
`;

const Menu: React.StatelessComponent<MenuProps> = (props): JSX.Element => {
	return (
		<StyledWrapper backgroundColor={Color.Black} sticky={props.sticky}>
			<Layout width="80%" maxWidth="960px" center>
				<StyledMenu {...props}>
					<StyledImage size="50px" src={props.logo} />
						<StyledMenuInner>
							{props.children}
						</StyledMenuInner>
				</StyledMenu>
			</Layout>
		</StyledWrapper>
	);
};

export default Menu;
