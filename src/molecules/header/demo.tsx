import * as React from 'react';
import Header from './index';
import MenuItem from "../../molecules/menu-item";

const HeaderDemo: React.StatelessComponent<void> = (): JSX.Element => {
	return (
		<Header logo="/api/static/alva-small.png">
			<MenuItem linkName="Story" />
			<MenuItem linkName="Learn" />
			<MenuItem linkName="API" />
			<MenuItem linkName="Github" />
			<MenuItem linkName="Twitter" />
		</Header>
	);
};

export default HeaderDemo;
