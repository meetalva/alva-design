import * as React from 'react';
import Copy from 'Pattern';

const CopyDemo: React.StatelessComponent<void> = (): JSX.Element => {
	return (
		<Copy tagName="div">
			Lorem ipsum dolor sit,
			consetetur sadipscing elitr, sed diam nonumy eirmod tempor
			invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua.
		</Copy>
	);
};

export default CopyDemo;
