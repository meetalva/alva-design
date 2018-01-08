import * as React from 'react';
import Radio from './index';
import Space, { Size } from '../space';

const RadioDemo: React.StatelessComponent<void> = (): JSX.Element => {
	return (
		<div>
			<Space size={Size.M} />
			<Radio labelText="Radio" />
			<Space size={Size.M} />
			<Radio labelText="Radio" checked />
			<Space size={Size.M} />
			<Radio labelText="Radio" disabled />
		</div>
	);
};

export default RadioDemo;
