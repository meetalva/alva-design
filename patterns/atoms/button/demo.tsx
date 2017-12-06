import * as React from 'react';
import Button, { Order } from './index';

export default function ButtonDemo() {
	return (
		<div>
			<div>
				<Button order={Order.Primary}>
					Primary Button
				</Button>
				<Button order={Order.Primary} disabled>
					Primary Button
				</Button>
			</div>
			<div>
				<Button order={Order.Secondary}>
					Secondary Button
				</Button>
				<Button order={Order.Secondary} disabled>
					Secondary Button
				</Button>
			</div>
		</div>
	);
}
