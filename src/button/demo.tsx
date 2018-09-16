import * as React from 'react';

import Button, { ButtonOrder } from '.';
import Space, { Size } from '../space';

const CheckboxDemo: React.StatelessComponent<void> = (): JSX.Element => {
	return (
		<div>
			<Button order={ButtonOrder.Primary}>Primary</Button>
			<Space size={Size.M} />
			<Button order={ButtonOrder.Secondary}>Secondary</Button>
			<Space size={Size.M} />
			<Button order={ButtonOrder.Primary} disabled>Primary disabled</Button>
			<Space size={Size.M} />
			<Button order={ButtonOrder.Secondary} disabled>Secondary disabled</Button>
		</div>
	);
};

export default CheckboxDemo;
