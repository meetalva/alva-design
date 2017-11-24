import * as React from 'react';
import styled, { css } from 'styled-components';

export interface SpaceProps {
	size?: string;
}

const StyledSpace = styled.div`
	display: block;

	${(props: SpaceProps) => {
		switch (props.size) {
			case "x-small":
				return css`
					height: 8px;
					width: 8px;
					}
				`
			case "small":
				return css`
					height: 16px;
					width: 16px;
					}
				`
			case "base":
			default:
				return css`
					height: 32px;
					width: 16px;
					}
				`
			case "large":
				return css`
					height: 64px;
					width: 16px;
					}
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
