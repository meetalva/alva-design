import * as React from 'react';
import Copy, { Size as CopySize } from './index';

const CopyDemo: React.StatelessComponent<void> = (): JSX.Element => {
	return (
		<div>
			<Copy size={CopySize.S}>
				CopySize.S
				<div></div>
				Lorem ipsum dolor sit, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua.
			</Copy>
			<Copy>
				CopySize.M
				<div></div>
				Lorem ipsum dolor sit, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua.
			</Copy>
		</div>
	);
};

export default CopyDemo;
