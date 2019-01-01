import * as React from "react";
import styled, { css } from "styled-components";

export interface LayoutProps {
	/** @name Direction @default vertical */ direction?: Direction;
	/** @name Width @default 100% */ width?: string;
	/** @name Maximum width*/ maxWidth?: string;
	/** @name Background color @default transparent */ backgroundColor?: string;
	center?: boolean;
	
}

export enum Direction {
	/** @name horizontal */ Horizontal,
	/** @name vertical */ Vertical
}

const StyledLayout = styled.div`
	display: flex;
	margin: 0 ${(props: LayoutProps) => props.center && "auto" || ''};
	width: ${(props: LayoutProps) => props.width || 'auto'};
	max-width: ${(props: LayoutProps) => props.maxWidth || "none"};
	background-color: ${(props: LayoutProps) => props.backgroundColor || "none"};

	${(props: LayoutProps) => {
		switch (props.direction) {
			case Direction.Horizontal:
				return css`
					flex-direction: row;
				`;
			case Direction.Vertical:
			default:
				return css`
					flex-direction: column;
				`;
		}
	}};
`;

const Layout: React.StatelessComponent<LayoutProps> = props => {
	return <StyledLayout {...props}>{props.children}</StyledLayout>;
};

export default Layout;
