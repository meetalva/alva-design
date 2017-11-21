import * as React from 'react';
import styled, {StyledComponentClass} from 'styled-components';

import { Color } from 'colors';

export interface CopyProps {
  className?: string;
  color?: Color;
  tagName?: string;
}

interface CopyProxyProps {
  className?: string;
  tagName: string;
}

interface StyledCopyProps extends CopyProxyProps {
  color?: Color;
}

// The proxy component is used to rendering styled componentes with variable
// tag names.
const CopyProxy: React.StatelessComponent<CopyProxyProps> = (props) => {
  const ProxyComponent = props.tagName;

  return (
    <ProxyComponent className={props.className}>{props.children}</ProxyComponent>
  );
};

const StyledCopy: StyledComponentClass<StyledCopyProps, {}> = styled(CopyProxy)`
  margin: 0;
  color: ${(props: StyledCopyProps) => props.color ? props.color.toString() : 'inherit'};
`;

export const CopyItalic = styled.em`
  font-style: normal;
`;

const Copy: React.StatelessComponent<CopyProps> = (props): JSX.Element => {
  const tagName = props.tagName === undefined ? 'p' : props.tagName;

  return (
    <StyledCopy
      className={props.className}
      color={props.color}
      tagName={tagName}
      >
      {props.children}
    </StyledCopy>
  );
};

export default Copy;
