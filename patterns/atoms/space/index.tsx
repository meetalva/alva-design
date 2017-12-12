import * as React from 'react';
import styled, { css } from 'styled-components';

export interface SpaceProps {
	size?: Size;
}

export enum Size {
	XSmall,
	Small,
	Base,
	Large,
	XLarge
}

const StyledSpace = styled.div`
	display: block;

	${(props: SpaceProps) => {
		switch (props.size) {
			case Size.XSmall:
				return css`
					height: 8px;
					width: 8px;
				`
			case Size.Small:
				return css`
					height: 16px;
					width: 16px;
				`
			case Size.Base:
			default:
				return css`
					height: 32px;
					width: 16px;
				`
			case Size.Large:
				return css`
					height: 64px;
					width: 16px;
				`
			case Size.XLarge:
				return css`
					height: 128px;
					width: 16px;
				`
			}
	}}
`;

const Space: React.StatelessComponent<SpaceProps> = (props): JSX.Element => {
	return (
		<StyledSpace size={props.size} />
	);
};

export default Space;
