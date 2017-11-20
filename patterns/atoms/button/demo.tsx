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
			</div>
			<div>
				<Button order={Order.Secondary}>
					Secondary Button
				</Button>
			</div>
		</div>
	);
}
