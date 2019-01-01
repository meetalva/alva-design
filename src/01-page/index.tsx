import { Color } from '../colors';
import Layout from '../layout';
import * as React from 'react';

export interface SectionProps {
	/** @name Background Color */
	backgroundColor?: Color;

	/** @name Text Color */
	textColor?: Color;

	
}


const Section: React.StatelessComponent<SectionProps> = (props): JSX.Element => {
	return (
		<Layout backgroundColor={props.backgroundColor || Color.White}>
			<Layout width="80%" maxWidth="960px" center>
				{props.children}
			</Layout>
		</Layout>
	);
};

export default Section;
