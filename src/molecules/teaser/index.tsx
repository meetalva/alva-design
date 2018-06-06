import * as React from "react";
import styled from "styled-components";
import colors from "../../atoms/colors";

export interface TeaserProps {
	/** @name Headline text @default Headline */ headline: React.ReactNode;
	/** @name Button label @default Button */ button: React.ReactNode;
	/** @ignore */ onClick?: React.MouseEventHandler<HTMLButtonElement>;
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
