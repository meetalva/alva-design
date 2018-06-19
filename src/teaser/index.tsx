import * as React from "react";
import styled from "styled-components";
import colors from "../colors";

export interface TeaserProps {
	/** @name Headline*/ headline: React.ReactNode;
	/** @name Button */ button: React.ReactNode;
}

const StyledTeaser = styled.div`
	padding: 30px;
	background: ${colors.white.toString()};
	border: 1px solid ${colors.grey90.toString()};
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
