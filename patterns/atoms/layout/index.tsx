import * as React from "react";
import styled, { css } from "styled-components";

export enum Direction {
	/** @name horizontal */ HORIZONTAL,
	/** @name vertical */ VERTICAL
}

export interface LayoutProps {
	/** @name Direction @default vertical */ direction?: Direction;
	/** @name Maximum width @default 100% */ maxWidth?: string;
	/** @name Background color @default transparent */ backgroundColor?: string;
}

const StyledLayout = styled.div`
	display: flex;
	margin: 0 auto;
	width: 100%;
	max-width: ${(props: LayoutProps) => props.maxWidth || "none"};
	background-color: ${(props: LayoutProps) => props.backgroundColor || "none"};

	${(props: LayoutProps) => {
		console.log("layout got " + props.direction);
		console.log("expecting " + Direction.HORIZONTAL);
		console.log("or " + Direction.VERTICAL);

		switch (props.direction) {
			case Direction.HORIZONTAL:
				return css`
					flex-direction: row;
				`;
			case Direction.VERTICAL:
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
