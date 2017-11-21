import * as React from 'react';
import styled, {css, StyledComponentClass} from 'styled-components';

import colors, { Color } from 'colors';
import { fonts } from 'fonts';

export interface CopyProps {
  className?: string;
  size?: Size;
  tagName?: string;
}

interface CopyProxyProps {
  className?: string;
  tagName: string;
}

export enum Size {
  S,
  M
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
      case Size.S:
        return css`
          font-size: 12px;
        `
      case Size.M:
      default:
        return css`
          font-size: 18px;
        `
    }
  }}
`;

const Copy: React.StatelessComponent<CopyProps> = (props): JSX.Element => {
  const tagName = props.tagName === undefined ? 'p' : props.tagName;

  return (
    <StyledCopy
      className={props.className}
      tagName={tagName}
      size={props.size}
      >
      {props.children}
    </StyledCopy>
  );
};

export default Copy;
