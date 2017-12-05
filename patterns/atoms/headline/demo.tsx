import * as React from 'react';
import Headline from './index';

const HeadlineDemo: React.StatelessComponent<void> = (): JSX.Element => {
	return (
		<div>
			<Headline order={1} tagName="h1">
				Headline Order 1
			</Headline>
			<Headline order={2}>
				Headline Order 2
			</Headline>
			<Headline order={3}>
				Headline Order 3
			</Headline>
		</div>
	);
};

export default HeadlineDemo;
