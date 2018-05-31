import * as React from "react";

import { IconName, IconRegistry } from "../../atoms/icons";
import DropdownItem from "../../atoms/dropdown-item";
import Dropdown from "./index";

export interface DropdownDemoState {
	dropdownOpen: boolean;
}

export default class DropdownDemo extends React.Component<null, DropdownDemoState> {
	public constructor() {
		super();

		this.state = { dropdownOpen: false };
		this.handleDropdownToggle = this.handleDropdownToggle.bind(this);
	}

	public render(): JSX.Element {
		return (
			<div>
				<Dropdown
					onToggle={this.handleDropdownToggle}
					open={this.state.dropdownOpen}
					text="Dropdown"
				>
					<DropdownItem content={'Item'} />
					<DropdownItem content={'Item'} />
					<DropdownItem content={'Item'} />
				</Dropdown>
				<Dropdown onToggle={this.handleDropdownToggle} open={true} text="Dropdown">
				<DropdownItem content={'Option 1'} />
				<DropdownItem content={'Option 2'} />
				<DropdownItem content={'Option 3'} />
				</Dropdown>
				<IconRegistry names={IconName} />
			</div>
		);
	}

	protected handleClick = () => {
		console.log("dropdown click handler");
	};

	protected handleDropdownToggle(): void {
		this.setState((prevState: DropdownDemoState) => ({
			...prevState,
			dropdownOpen: !prevState.dropdownOpen
		}));
	}
}
