import * as React from 'react';
import { HeadlineLevel } from "../headline";
import Feature from './index';

const FeatureDemo: React.StatelessComponent<void> = (): JSX.Element => {
	return (
		<Feature
            headlineText="The quick brown fox jumps over the lazy dog"
            headlineLevel={HeadlineLevel.H3}
            copyText="Something went wrong :("
        />
	);
};

export default FeatureDemo;
