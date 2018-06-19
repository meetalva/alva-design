import * as React from "react";
import styled from "styled-components";
import { Color } from "../colors";

export interface TeaserProps {
	/** @name Headline*/ headline: React.ReactNode;
	/** @name Button */ button: React.ReactNode;
}

const StyledTeaser = styled.div`
	padding: 30px;
	background: ${Color.White};
	border: 1px solid ${Color.Grey90};
`;

const Teaser: React.StatelessComponent<TeaserProps> = (props): JSX.Element => {
	return (
		<StyledTeaser>
			{props.headline}
			{props.button}
		</StyledTeaser>
	);
};

export default Teaser;
