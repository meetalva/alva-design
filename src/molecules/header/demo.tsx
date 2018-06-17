import * as React from 'react';
import Header from './index';
import Copy, {Size as CopySize} from "../../atoms/copy";

const HeaderDemo: React.StatelessComponent<void> = (): JSX.Element => {
	return (
		<Header>
			<Copy size={CopySize.Small}>foo</Copy>
			<Copy size={CopySize.Small}>bar</Copy>
			<Copy size={CopySize.Small}>la</Copy>
		</Header>
	);
};

export default HeaderDemo;
