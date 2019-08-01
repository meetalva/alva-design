import * as React from 'react';
import { Copy, CopySize } from './copy';

const CopyDemo: React.StatelessComponent<void> = (): JSX.Element => {
	return (
		<div>
			<Copy size={CopySize.Small}>
				CopySize.S
				<div />
				Lorem ipsum dolor sit, consetetur sadipscing elitr, sed diam nonumy eirmod tempor
				invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua.
			</Copy>
			<Copy size={CopySize.Medium}>
				CopySize.M
				<div />
				Lorem ipsum dolor sit, consetetur sadipscing elitr, sed diam nonumy eirmod tempor
				invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua.
			</Copy>
			<Copy size={CopySize.Large}>
				CopySize.L
				<div />
				Lorem ipsum dolor sit, consetetur sadipscing elitr, sed diam nonumy eirmod tempor
				invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua.
			</Copy>
		</div>
	);
};

export default CopyDemo;
