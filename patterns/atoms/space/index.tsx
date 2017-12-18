import * as React from "react";
import styled, { css } from "styled-components";

export interface SpaceProps {
	/** @name Size @default M */ size?: Size;
}

export enum Size {
	XS,
	S,
	M,
	L,
	XL
}

const StyledSpace = styled.div`
	display: block;

	${(props: SpaceProps) => {
		switch (props.size) {
			case Size.XS:
				return css`
					height: 8px;
					width: 8px;
				`;
			case Size.S:
				return css`
					height: 16px;
					width: 16px;
				`;
			case Size.M:
			default:
				return css`
					height: 32px;
					width: 32px;
				`;
			case Size.L:
				return css`
					height: 64px;
					width: 64px;
				`;
			case Size.XL:
				return css`
					height: 128px;
					width: 128px;
				`;
		}
	}};
`;

const Space: React.StatelessComponent<SpaceProps> = (props): JSX.Element => {
	return <StyledSpace size={props.size} />;
};

export default Space;
