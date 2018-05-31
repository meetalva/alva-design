import * as React from 'react';
import styled from 'styled-components';
import colors from '../colors';
import {fonts} from '../fonts';

export interface DropdownItemProps {
	/** @name Content text @default Dropdown Item */ content: string;
}

const StyledDropdownItem = styled.div`
	display: flex;
	padding: 17px 22px;
	border-top: 1px solid ${colors.grey70.toString() };
	font-family: ${fonts().NORMAL_FONT};

	&:hover {
		color: ${colors.black.toString()};
	}
`;


const DropdownItem: React.StatelessComponent<DropdownItemProps> = props => {
	return <StyledDropdownItem>{props.content}</StyledDropdownItem>
};

export default DropdownItem;
