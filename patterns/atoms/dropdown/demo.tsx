import * as React from 'react';

import DropdownItem from 'dropdown-item';
import Dropdown from 'Pattern';

export interface DropdownDemoState {
  dropdownOpen?: boolean;
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
				<DropdownItem>Item</DropdownItem>
				<DropdownItem>Item</DropdownItem>
				<DropdownItem>Item</DropdownItem>
			</Dropdown>
			<Dropdown
				onToggle={this.handleDropdownToggle}
				open={true}
				text="Dropdown"
				>
				<DropdownItem>Option 1</DropdownItem>
				<DropdownItem>Option 2</DropdownItem>
				<DropdownItem>Option 3</DropdownItem>
				<DropdownItem>Option 4</DropdownItem>
			</Dropdown>
		</div>
    );
  }

  protected handleClick = () => {
    console.log('dropdown click handler');
  }

  protected handleDropdownToggle(): void {
    this.setState((prevState: DropdownDemoState) => ({ ...prevState, dropdownOpen: !prevState.dropdownOpen }));
  }
}
