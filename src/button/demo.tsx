import * as React from 'react';

import Button from '.';
import Space, { SpaceSize } from '../space';

const CheckboxDemo: React.StatelessComponent<void> = (): JSX.Element => {
	return (
		<div>
			<Button primary>Primary</Button>
			<Space size={SpaceSize.M} />
			<Button>Secondary</Button>
			<Space size={SpaceSize.M} />
			<Button primary disabled>Primary disabled</Button>
			<Space size={SpaceSize.M} />
			<Button disabled>Secondary disabled</Button>
		</div>
	);
};

export default CheckboxDemo;
