import * as React from 'react';
import styled from 'styled-components';
import colors from '../../atoms/colors';
import Copy, { Size as CopySize } from '../../atoms/copy';
import Headline, { HeadlineProps } from '../../atoms/headline';

export interface TeaserProps {
	copyText: string;
	headline: HeadlineProps;
	headlineText: string;
}

const StyledHero = styled.div`
	padding: 30px;
	background: ${colors.blue.toString()};
	color: ${colors.white.toString()};
	text-align: center;
`;

const Teaser: React.StatelessComponent<TeaserProps> = (props): JSX.Element => {
	return (
		<StyledHero>
			<Headline
				tagName={props.headline.tagName}
				order={props.headline.order}
				>
				{props.headlineText}
			</Headline>
			<Copy
				size={CopySize.Medium}
				>
				{props.copyText}
			</Copy>
		</StyledHero>
	);
};

export default Teaser;
