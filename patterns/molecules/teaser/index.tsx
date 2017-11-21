import * as React from 'react';
import styled, { css } from 'styled-components';
import Button, {Order} from 'button';
import colors from 'colors';
import Copy, { Size as CopySize, CopyProps } from 'copy';
import Headline, { HeadlineProps } from 'headline';
import Image from 'image';

export interface TeaserProps {
	buttonLabel: string;
	copyText: string;
	headline: HeadlineProps;
	headlineText: string;
	onClick?: React.MouseEventHandler<HTMLButtonElement>;
}

const StyledTeaser = styled.div`
	padding: 30px;
	background: ${colors.white.toString()};
	border: 1px solid ${colors.grey90.toString()};
`;

const StyledHeadline = styled(Headline)`
  margin-bottom: 30px;
`;

const StyledCopy = styled(Copy)`
  margin-bottom: 30px;
`;

const Teaser: React.StatelessComponent<TeaserProps> = (props): JSX.Element => {
	return (
		<StyledTeaser>
			<StyledHeadline
				tagName={props.headline.tagName}
				order={props.headline.order}
				>
				{props.headlineText}
			</StyledHeadline>
			<StyledCopy
				size={CopySize.M}
				>
				{props.copyText}
			</StyledCopy>
			<Button
        onClick={props.onClick}
        order={Order.Primary}
      	>
        {props.buttonLabel}
      </Button>
		</StyledTeaser>
	);
};

export default Teaser;
