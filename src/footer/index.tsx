import * as React from 'react';
import styled from 'styled-components';
import Copy from '../copy';
import { Color } from '../colors';
import Layout from '../layout';

export interface MenuProps {
	/** @asset @name Logo */
	logo?: string;

	/** @copy @name Copyright */
	copyright?: string;

	children?: React.ReactNode;
}

const StyledCopy = styled(Copy)`
`;

const StyledFooter = styled.div`
	display: flex;
	justify-content: space-between;
	align-items: center;
	padding: 20px 0;
	box-sizing: border-box;
	color: ${Color.White};
`;

const StyledMenuInner = styled.div`
	display: flex;
`;

const Menu: React.StatelessComponent<MenuProps> = (props): JSX.Element => {
	return (
		<Layout backgroundColor={Color.Black}>
			<Layout width="80%" maxWidth="960px" center>
				<StyledFooter {...props}>
					<StyledCopy color={Color.Grey50}>{props.copyright}</StyledCopy>
					<StyledMenuInner>
						{props.children}
					</StyledMenuInner>
				</StyledFooter>
			</Layout>
		</Layout>
	);
};

export default Menu;
