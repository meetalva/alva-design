import * as React from 'react';
import styled, { css, StyledComponentClass } from 'styled-components';
import { fonts } from '../fonts';
import { TextAlign } from '../types';

export interface CopyProps {
	/** @name CSS Class @ignore */ className?: string;
	/** @name Copy Size @default Default */ size?: CopySize;
	/** @name Tag Name @ignore */ tagName?: string;
	/** @name Text Align @default Left */ textAlign?: TextAlign;
	/** @name Color @default #000000 */ color?: string;
	/** @name Uppercase @default false */ uppercase?: boolean;

	children?: React.ReactNode;
}

interface CopyProxyProps {
	className?: string;
	tagName: string;
}

export enum CopySize {
	Small,
	Medium,
	Large
}

// The proxy component is used to rendering styled componentes with variable
// tag names.
const CopyProxy: React.StatelessComponent<CopyProxyProps> = props => {
	const ProxyComponent = props.tagName as any || 'p';
	return <ProxyComponent className={props.className}>{props.children}</ProxyComponent>;
};

export const Copy: StyledComponentClass<CopyProps, {}> = styled(CopyProxy)`
	margin: 0;
	font-family: ${fonts().NORMAL_FONT};
	color: ${(props: CopyProps) => props.color || 'inherit'};
	line-height: 1.5;

	${(props: CopyProps) => {
		switch (props.size) {
			case CopySize.Small:
				return css`
					font-size: 12px;
				`;
			case CopySize.Medium:
			default:
				return css`
					font-size: 16px;
				`;
			case CopySize.Large:
				return css`
					font-size: 18px;

					@media screen and (min-width: 960px) {
						font-size: 24px;
					}
				`;
		}
	}};

	${(props: CopyProps) => {
		switch (props.textAlign) {
			case TextAlign.Center:
				return css`
					text-align: center;
				`;
			case TextAlign.Right:
				return css`
					text-align: right;
				`;
			case TextAlign.Left:
				return css`
					text-align: left;
				`;
			default:
				return css`
					text-align: inherit;
				`;
		}
	}};

	${(props: CopyProps) =>
		props.uppercase
			? `letter-spacing: 1px;
				text-transform: uppercase;`
			: ''};
`;
