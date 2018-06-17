import * as React from 'react';
import Header from './index';
import MenuElement from "../../molecules/menu-element";

const HeaderDemo: React.StatelessComponent<void> = (): JSX.Element => {
	return (
		<Header>
			<MenuElement linkName="foo" />
			<MenuElement linkName="foo" />
			<MenuElement linkName="foo" />
		</Header>
	);
};

export default HeaderDemo;
