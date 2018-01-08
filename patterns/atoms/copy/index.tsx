import * as React from 'react';
import styled, { css, StyledComponentClass } from 'styled-components';

import { fonts } from '../fonts';

export interface CopyProps {
	/** @name CSS Class @hidden */ className?: string;
	/** @name Copy Size @default Medium */ size?: Size;
	/** @name Tag Name @hidden */ tagName?: string;
	/** @name Text Align @default Left */ textAlign?: TextAlign;
	/** @name Text @default Enter some text */ text?: string;
	/** @name Color @default #000000 */ color?: string;
	/** @name Uppercase @default false */ uppercase?: boolean;
}

interface CopyProxyProps {
	className?: string;
	tagName: string;
}

export enum Size {
	Small,
	Medium
}

export enum TextAlign {
	Left,
	Center,
	Right
}

// The proxy component is used to rendering styled componentes with variable
// tag names.
const CopyProxy: React.StatelessComponent<CopyProxyProps> = props => {
	const ProxyComponent = props.tagName;

	return <ProxyComponent className={props.className}>{props.children}</ProxyComponent>;
};

const StyledCopy: StyledComponentClass<CopyProps, {}> = styled(CopyProxy)`
	margin: 0;
	font-family: ${fonts().NORMAL_FONT};
	color: ${(props: CopyProps) => props.color || 'inherit'};

	${(props: CopyProps) => {
		switch (props.size) {
			case Size.Small:
				return css`
					font-size: 12px;
					line-height: 15px;
				`;
			case Size.Medium:
			default:
				return css`
					font-size: 18px;
					line-height: 21px;
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

const Copy: React.StatelessComponent<CopyProps> = (props): JSX.Element => {
	const tagName = props.tagName ? props.tagName : 'p';
	const { className, size, textAlign, color, uppercase, text, children } = props;
	return (
		<StyledCopy
			className={className}
			tagName={tagName}
			size={size}
			textAlign={textAlign}
			color={color}
			uppercase={uppercase}
		>
			{text}
			{children}
		</StyledCopy>
	);
};

export default Copy;
