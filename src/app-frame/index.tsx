import * as React from "react";
import styled from "styled-components";

export interface AppFrameProps {
	children?: React.ReactNode;
}

const StyledFrame = styled.div`
	box-shadow: rgba(0, 0, 0, 0.2) 0 0 100px;
	position: relative;
	z-index: 10;
	border-radius: 6px;
	margin: 0 auto;
	text-align: center;
	overflow: hidden;
`;

const AppFrame: React.StatelessComponent<AppFrameProps> = (props): JSX.Element => {
	return (
		<StyledFrame {...props}>
			{props.children}
		</StyledFrame>
	);
};

export default AppFrame;
