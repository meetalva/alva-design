import { Color } from '../colors';
import { Layout } from '../layout';
import * as React from 'react';
import styled from "@emotion/styled";

export interface SectionProps {
	/** @name Background Color */
	backgroundColor?: Color;

	/** @name Text Color */
	textColor?: Color;

	children?: React.ReactNode;
}

const StyledWrapper = styled.div<{ textColor: Color | 'inherit'; }>`
	margin: 0 auto;
	padding: 0 40px;
	color: ${props => props.textColor};
`;

/**
 * @icon Square
 */
export const Section: React.StatelessComponent<SectionProps> = (props): JSX.Element => {
	return (
		<Layout background={props.backgroundColor || Color.White}>
			<Layout width="100%" maxWidth="1280px" center>
				<StyledWrapper textColor={props.textColor || 'inherit'}>
					{props.children}
				</StyledWrapper>
			</Layout>
		</Layout>
	);
};
