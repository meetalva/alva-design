import * as React from 'react';
import styled, { css } from 'styled-components';
import colors from 'colors';

const StyledButton = styled.button`
	background: ${colors.greenDark};
`;

const Button: React.StatelessComponent<{}> = (props): JSX.Element => {
	return (
		<StyledButton>
			Button
		</StyledButton>
	);
};

export default Button;
