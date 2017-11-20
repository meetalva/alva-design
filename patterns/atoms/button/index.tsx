import * as React from 'react';
import styled, { css } from 'styled-components';

const StyledButton = styled.button`
   background: red;
`;

const Button: React.StatelessComponent<{}> = (props): JSX.Element => {
  return (
    <StyledButton>
        Button
    </StyledButton>
  );
};

export default Button;