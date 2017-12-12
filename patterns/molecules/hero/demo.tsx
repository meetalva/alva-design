import * as React from 'react';
import { HeadlineProps } from '../../atoms/headline';
import Hero from './index';

const headline: HeadlineProps = {
	order: 2,
	tagName: 'h1'
};

export default function ButtonDemo() {
	return (
		<Hero
			headline={headline}
			headlineText="Start your designs with Stacked"
			copyText="Stacked is a radical tool to create systematic designs in a cross-functional team. The core are reusable components build with real web technologies, fully responsive to match any device."
		>
		</Hero>
	);
}
