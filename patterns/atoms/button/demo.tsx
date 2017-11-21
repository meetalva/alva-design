import * as React from 'react';
import styled from 'styled-components';
import Button, { Order } from 'Pattern';

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
