import * as React from "react";
import styled from "styled-components";

export interface FeatureProps {

}

const StyledFeatureList = styled.div`
	max-width: 1080px;
	margin: 0 auto;
	vertical-align: top;
`;


const FeatureList: React.StatelessComponent<FeatureProps> = (props): JSX.Element => {
	return (
		<StyledFeatureList>
			{props.children}
		</StyledFeatureList>
	);
};

export default FeatureList;
