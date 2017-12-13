import * as React from "react";
import styled, { css } from "styled-components";

export enum Direction {
	/** @name horizontal */ HORIZONTAL,
	/** @name vertical */ VERTICAL
}

export interface LayoutProps {
	/** @name Direction */ direction?: Direction;
	/** @name Maximum width */ maxWidth?: string;
}

const StyledLayout = styled.div`
	display: flex;
	margin: 0 auto;
	max-width: ${(props: LayoutProps) => props.maxWidth || "none"};

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
