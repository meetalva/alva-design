import * as React from 'react';
import styled from 'styled-components';
import colors, { Color } from 'colors';

export enum IconName {
  ArrowDown
}
export interface IconRegistryProps {
  names: typeof IconName;
}

export interface IconProps {
  className?: string;
  color?: Color;
  name: IconName | null;
  size?: Size;
}

export enum Size {
  XS = 24,
  S = 30,
  M = 48,
  L = 52
}

interface StyledIconProps {
  className?: string;
  iconColor?: Color;
  size?: Size;
}

interface IconRegistrySymbolProps {
  id: string;
  size: 'small' | 'large';
}

const icons: { readonly [key: string]: JSX.Element[][] | JSX.Element[] } = {
	[IconName.ArrowDown]: [
		[
			<path key="arrow-down" d="M12 15.5l6.06217783-7H5.93782217"/>
		],
		[
			<path key="arrow-down" d="M24 31l12.12435565-14h-24.2487113"/>
		]
	]
};

const StyledIconRegistry = styled.svg`
  display: none;
`;

const StyledIcon = styled.svg`
  width: ${(props: StyledIconProps) => props.size || Size.S}px;
  height: ${(props: StyledIconProps) => props.size || Size.S}px;

  color: ${(props: StyledIconProps) => props.iconColor
    ? props.iconColor.toString()
    : 'inherit'
  };
  fill: currentColor;
  stroke: none;
`;

const IconRegistrySymbol: React.StatelessComponent<IconRegistrySymbolProps> = (props) => {
  return (
    <symbol
      id={`${props.id}-${props.size}`}
      viewBox={props.size === 'small' ? '0 0 24 24' : '0 0 48 48'} >
      {props.children}
    </symbol>
  );
};

export const IconRegistry: React.StatelessComponent<IconRegistryProps> = (props): JSX.Element => {
  return (
    <StyledIconRegistry>
      {reduce(props.names, (name, e) => {
        const [small, large] = icons[e];

        return [
          <IconRegistrySymbol id={name} key={`${name}-small`} size="small">{small}</IconRegistrySymbol>,
          <IconRegistrySymbol id={name} key={`${name}-large`} size="large">{large || small}</IconRegistrySymbol>
        ];
      })}
    </StyledIconRegistry>
  );
};

function getIconRef(name: string, size: Size): string {
  switch (size) {
    case Size.XS:
    case Size.S:
      return `#${name}-small`;
    case Size.M:
    case Size.L:
    default:
      return `#${name}-large`;
  }
}

export const Icon: React.StatelessComponent<IconProps> = (props): JSX.Element => {
  const icon = typeof props.name === 'number' ? IconName[props.name] : null;
  return (
    <StyledIcon className={props.className} iconColor={props.color} size={props.size}>
      {icon !== null && <use xlinkHref={getIconRef(icon, props.size || Size.S)} />}
    </StyledIcon>
  );
};

export function reduce(e: typeof IconName, cb: (name: string, e: number) => JSX.Element[]): JSX.Element[] {
  const results = [];

  for (const n in e) {
    if (isNaN(Number(n))) {
      results.push(...cb(n, Number(e[n])));
    }
  }

  return results;
}
