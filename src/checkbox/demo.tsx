import * as React from 'react';

import Checkbox from './index';
import Space, { Size } from '../space';

const CheckboxDemo: React.StatelessComponent<void> = (): JSX.Element => {
	return (
		<div>
			<Checkbox labelText="Checkbox" />
			<Space size={Size.M} />
			<Checkbox labelText="Checkbox" checked />
			<Space size={Size.M} />
			<Checkbox labelText="Checkbox" disabled />
			<Space size={Size.M} />
			<Checkbox labelText="Checkbox" checked disabled />
		</div>
	);
};

export default CheckboxDemo;
