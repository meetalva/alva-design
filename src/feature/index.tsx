import * as React from "react";
import styled from "styled-components";
import { Color } from "../colors";
import Copy, { Size as CopySize } from "../copy";
import Headline, { HeadlineLevel } from "../headline";

export interface FeatureProps {
	/** @name Headline level */ headlineLevel: HeadlineLevel;
	/** @name Headline */ headlineText: string;
	/** @name Copy */ copyText: string;
}

const StyledFeature = styled.div`
	display: inline-block;
	padding: 60px 120px 60px 30px;
	box-sizing: border-box;
	color: ${Color.Black};
	width: 50%;
`;

const StyledHeadline = styled(Headline)`
	margin: 20px 0;
`;

const StyledCopy = styled(Copy)`
	color: ${Color.Grey70};
`;

const StyledSVG = styled.svg`
	width: 40px;
	height: 40px;
`;

const Feature: React.StatelessComponent<FeatureProps> = (props): JSX.Element => {
	return (
		<StyledFeature>
			<StyledSVG viewBox="0 0 40 40">
				<path d="M16,28 C22.627417,28 28,22.627417 28,16 C28,9.372583 22.627417,4 16,4 C9.372583,4 4,9.372583 4,16 C4,22.627417 9.372583,28 16,28 Z M16,31 C7.71572875,31 1,24.2842712 1,16 C1,7.71572875 7.71572875,1 16,1 C24.2842712,1 31,7.71572875 31,16 C31,24.2842712 24.2842712,31 16,31 Z" fill={Color.Violet}></path>
				<circle fill={Color.Pink} cx="24" cy="24" r="15"></circle>
				<path d="M10.1735916,29.8264084 C9.64391393,28.5709846 9.28023045,27.228393 9.11003825,25.8261309 C11.0599365,27.1959026 13.4360647,28 16,28 C22.627417,28 28,22.627417 28,16 C28,13.4360647 27.1959026,11.0599365 25.8261309,9.11003825 C27.228393,9.28023045 28.5709846,9.64391393 29.8264084,10.1735916 C30.5821773,11.9648892 31,13.9336507 31,16 C31,24.2842712 24.2842712,31 16,31 C13.9336507,31 11.9648892,30.5821773 10.1735916,29.8264084 Z" fill={Color.VioletDark}></path>
			</StyledSVG>
			<StyledHeadline level={props.headlineLevel}>
				 {props.headlineText}
			</StyledHeadline>
			<StyledCopy size={CopySize.Small}>
				{props.copyText}
			</StyledCopy>
		</StyledFeature>
	);
};

export default Feature;
