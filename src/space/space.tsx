import * as React from 'react';

export interface SpaceProps {
	/** @name Size @default M */ size?: SpaceSize;
}

export enum SpaceSize {
	XS = 8,
	S = 16,
	M = 32,
	L = 64,
	XL = 128
}

/**
 * @icon Maximize
 */
export const Space: React.StatelessComponent<SpaceProps> = (props): JSX.Element => {
	return (
		<div style={{
			display: 'block',
			width: `${props.size}px`,
			height: `${props.size}px`
		}}>
			{props.children}
		</div>
	);
};
