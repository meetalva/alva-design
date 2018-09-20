import * as React from 'react';
import styled from 'styled-components';
import Copy from '../copy';
import { Color } from '../colors';
import Layout from '../layout';

export interface FooterProps {
	/** @copy @name Copyright */
	copyright: string;

	children: React.ReactNode;
}

const StyledFooter = styled.div`
	display: flex;
	justify-content: space-between;
	align-items: center;
	padding: 20px 0;
	box-sizing: border-box;
	color: ${Color.White};
`;

const StyledFooterInner = styled.div`
	display: flex;
`;

const Footer: React.StatelessComponent<FooterProps> = (props): JSX.Element => {
	return (
		<Layout backgroundColor={Color.Black}>
			<Layout width="80%" maxWidth="960px" center>
				<StyledFooter {...props}>
					<Copy color={Color.Grey50}>{props.copyright}</Copy>
					<StyledFooterInner>
						{props.children}
					</StyledFooterInner>
				</StyledFooter>
			</Layout>
		</Layout>
	);
};

export default Footer;
