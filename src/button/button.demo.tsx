import * as React from "react";
import { Button, ButtonOrder } from "./button";
import { Layout } from '../layout';
import { Color } from '../colors';

const ButtonDemo: React.StatelessComponent<void> = (): JSX.Element => {
	return (
		<>
			<Button order={ButtonOrder.Primary} color={Color.Pink} icon="/api/static/arrow.svg">Request early access</Button>
			<Layout background={Color.gPurplePink}>
			<Button order={ButtonOrder.Primary} color={Color.White} icon="/api/static/arrow_white.svg">Request early access</Button>
			</Layout>
		</>
	);
};

export default ButtonDemo;
