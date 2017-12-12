import * as React from 'react';
import styled, { css } from 'styled-components';

export interface LayoutProps {
	direction?: 'horizontal' | 'vertical';
	maxWidth?: string;
}

const StyledLayout = styled.div`
	display: flex;
	margin: 0 auto;
	max-width: ${(props: LayoutProps) => props.maxWidth || "none"};

	${(props: LayoutProps) => {
		switch (props.direction) {
			case 'horizontal':
				return css`
					flex-direction: row;
				`
			case 'vertical':
			default:
				return css`
					flex-direction: column;
				`
		}
	}}
`;

const Layout: React.StatelessComponent<LayoutProps> = (props) => {
	return (
		<StyledLayout maxWidth={props.maxWidth}>
			{props.children}
		</StyledLayout>
	);
};

export default Layout;
