import * as React from 'react';
import Navigation from './index';
import MenuItem from "../../molecules/menu-item";

const NavigationDemo: React.StatelessComponent<void> = (): JSX.Element => {
	return (
		<Navigation sticky logo="/api/static/alva-small.png">
			<MenuItem linkName="Story" />
			<MenuItem linkName="Learn" />
			<MenuItem linkName="API" />
			<MenuItem linkName="Github" />
			<MenuItem linkName="Twitter" />
		</Navigation>
	);
};

export default NavigationDemo;
