import * as React from 'react';
import styled, { css } from 'styled-components';

export interface LayoutProps {
	direction?: 'horizontal' | 'vertical';
}

const StyledLayout = styled.div`
	display: flex;
	width: 80%;
	margin: 0 auto;

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
		<StyledLayout>
			{props.children}
		</StyledLayout>
	);
};

export default Layout;
