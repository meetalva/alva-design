import * as React from "react";
import styled, { css } from "styled-components";

export interface SpaceProps {
	/** @name Size @default M */ size?: SpaceSize;
}

export enum SpaceSize {
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
			case SpaceSize.XS:
				return css`
					height: 8px;
					width: 8px;
				`;
			case SpaceSize.S:
				return css`
					height: 16px;
					width: 16px;
				`;
			case SpaceSize.M:
			default:
				return css`
					height: 32px;
					width: 32px;
				`;
			case SpaceSize.L:
				return css`
					height: 64px;
					width: 64px;
				`;
			case SpaceSize.XL:
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
