import * as React from 'react';

import Button from '.';
import Space, { Size } from '../space';

const CheckboxDemo: React.StatelessComponent<void> = (): JSX.Element => {
	return (
		<div>
			<Button primary>Primary</Button>
			<Space size={Size.M} />
			<Button>Secondary</Button>
			<Space size={Size.M} />
			<Button primary disabled>Primary disabled</Button>
			<Space size={Size.M} />
			<Button disabled>Secondary disabled</Button>
		</div>
	);
};

export default CheckboxDemo;
