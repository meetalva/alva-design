import * as React from 'react';

import Button, { ButtonOrder } from '.';
import Space, { SpaceSize } from '../space';

const ButtonDemo: React.StatelessComponent<void> = (): JSX.Element => {
	return (
		<div>
			<Button order={ButtonOrder.Primary}>Primary</Button>
			<Space size={SpaceSize.M} />
			<Button order={ButtonOrder.Secondary}>Secondary</Button>
			<Space size={SpaceSize.M} />
			<Button order={ButtonOrder.Primary} disabled>Primary disabled</Button>
			<Space size={SpaceSize.M} />
			<Button order={ButtonOrder.Secondary} disabled>Secondary disabled</Button>
		</div>
	);
};

export default ButtonDemo;
