import * as React from "react";
import { Button, ButtonOrder } from "./button";

const ButtonDemo: React.StatelessComponent<void> = (): JSX.Element => {
	return (
		<>
			<Button order={ButtonOrder.Primary} icon="/api/static/arrow.svg">Request early access</Button>
		</>
	);
};

export default ButtonDemo;
