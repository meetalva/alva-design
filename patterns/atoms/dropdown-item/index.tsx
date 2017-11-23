import * as React from 'react';
import styled from 'styled-components';
import colors from 'colors';
import {fonts} from 'fonts';

const StyledDropdownItem = styled.div`
	display: flex;
	padding: 17px 22px;
	border-top: 1px solid ${colors.grey70.toString() };
	font-family: ${fonts().NORMAL_FONT};

	&:hover {
		color: ${colors.black.toString()};
	}
`;


const DropdownItem: React.StatelessComponent<{}> = (props): JSX.Element => {
	return (
		<StyledDropdownItem>
			{props.children}
		</StyledDropdownItem>
	);
};

export default DropdownItem;
