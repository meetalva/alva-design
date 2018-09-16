import { Color } from '../colors';
import Layout from '../layout';
import * as React from 'react';
import styled from 'styled-components';

export interface SectionProps {
	/** @name Background Color */
	backgroundColor?: Color;

	/** @name Text Color */
	textColor?: Color;

	children?: React.ReactNode;
}

const StyledWrapper = styled.div`
	margin: 0 auto;
	color: ${(props: SectionProps) => props.textColor || 'inherit'};
	padding: 100px 0;

	@media screen and (min-width: 960px) {
		padding: 200px 0;
	}
`;

const Section: React.StatelessComponent<SectionProps> = (props): JSX.Element => {
	return (
		<Layout backgroundColor={props.backgroundColor || Color.White}>
			<Layout width="80%" maxWidth="960px" center>
				<StyledWrapper textColor={props.textColor}>
					{props.children}
				</StyledWrapper>
			</Layout>
		</Layout>
	);
};

export default Section;
