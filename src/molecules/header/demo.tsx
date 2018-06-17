import * as React from 'react';
import Header from './index';
import MenuElement from "../../molecules/menu-element";

const HeaderDemo: React.StatelessComponent<void> = (): JSX.Element => {
	return (
		<Header logo="/api/static/alva-small.png">
			<MenuElement linkName="Story" />
			<MenuElement linkName="Learn" />
			<MenuElement linkName="API" />
			<MenuElement linkName="Github" />
			<MenuElement linkName="Twitter" />
		</Header>
	);
};

export default HeaderDemo;
