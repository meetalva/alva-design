import * as React from 'react';
import Input from './index';
import Space, { SpaceSize as SpaceSize } from '../space';

const InputDemo: React.StatelessComponent<void> = (): JSX.Element => {
	return (
		<div>
			<Input labelText="Label" placeholder="Placeholder" />
			<Space size={SpaceSize.M} />
			<Input labelText="Label" value="The quick brown fox jumps over the lazy dog" />
			<Space size={SpaceSize.M} />
			<Input
				labelText="Label"
				value="The quick brown fox jumps over the lazy dog"
				errorText="Something went wrong :("
			/>
		</div>
	);
};

export default InputDemo;
