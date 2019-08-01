import * as React from "react";
import { Menu } from "./index";
import { MenuItem } from "../menu-item";

const MenuDemo: React.StatelessComponent<void> = (): JSX.Element => {
	return (
		<Menu sticky logo="/api/static/logo.svg">
			<MenuItem linkName="Learn" />
			<MenuItem linkName="About" />
		</Menu>
	);
};

export default MenuDemo;
