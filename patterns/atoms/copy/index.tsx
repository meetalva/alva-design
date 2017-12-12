import * as React from 'react';
import styled, {css, StyledComponentClass} from 'styled-components';

import colors from '../colors';
import { fonts } from '../fonts';

export interface CopyProps {
  /** @name CSS Class */
	className?: string;
  /** @name Copy Size */
	size?: Size;
	/** @name Tag name */
  tagName?: string;
	/** @name Text Align */
	textAlign?: TextAlign;
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
const CopyProxy: React.StatelessComponent<CopyProxyProps> = (props) => {
  const ProxyComponent = props.tagName;

  return (
    <ProxyComponent className={props.className}>{props.children}</ProxyComponent>
  );
};

const StyledCopy: StyledComponentClass<CopyProps, {}> = styled(CopyProxy)`
  margin: 0;
  color: ${colors.black.toString()};
  font-family: ${fonts().NORMAL_FONT};

  ${(props: CopyProps) => {
    switch (props.size) {
      case Size.Small:
        return css`
          font-size: 12px;
        `
      case Size.Medium:
      default:
        return css`
          font-size: 18px;
        `
    }
  }};

	${(props: CopyProps) => {
		switch (props.textAlign) {
			case TextAlign.Center:
				return css`
					text-align: center;
				`
			case TextAlign.Right:
				return css`
					text-align: right;
				`
			case TextAlign.Left:
			default:
				return css`
					text-align: left;
				`
		}
  }};
`;

const Copy: React.StatelessComponent<CopyProps> = (props): JSX.Element => {
  const tagName = props.tagName === undefined ? 'p' : props.tagName;
	const children = props.children === undefined ? 'Lorem ipsum Dolor sit' : props.children;

  return (
    <StyledCopy
      className={props.className}
      tagName={tagName}
      size={props.size}
			textAlign={props.textAlign}
      >
      {children}
    </StyledCopy>
  );
};

export default Copy;
