import * as React from 'react';
import { Section } from './index';
import { Headline, HeadlineLevel } from '../headline';
import { Copy, CopySize } from '../copy';
import { Space, SpaceSize} from '../space';
import { Color } from '../colors';
import { Button, ButtonOrder } from '../button';
import { Layout } from '../layout';

const SectionDemo: React.StatelessComponent<void> = (): JSX.Element => {
	return (
		<Section backgroundColor={Color.White}>
			<Headline level={HeadlineLevel.H1} color={Color.gPurplePink}>
			Create better products together
			</Headline>
			<Space size={SpaceSize.L} />
			<Layout maxWidth="440px">
				<Copy size={CopySize.Medium} color={Color.Grey50}>
				Alva is a product design tool for the 21st century, enabling cross-functional teams to co-create delightful, consistent experiences blazingly fast.				</Copy>
			</Layout>
			<Space size={SpaceSize.M} />
			<Button order={ButtonOrder.Primary} color={Color.Pink} icon="/api/static/arrow.svg" onClick={() => alert('Click!')}>Request early access</Button>
		</Section>
	);
};

export default SectionDemo;
