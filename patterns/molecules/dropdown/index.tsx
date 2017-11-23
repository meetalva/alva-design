import * as React from 'react';
import styled from 'styled-components';
import colors from 'colors';
import { fonts } from 'fonts';
import { Icon, IconName, Size as IconSize } from 'icons';

export interface DropdownProps {
	open?: boolean;
	text: string;

	onToggle(event: React.MouseEvent<HTMLElement>): void;
}

interface StyledIconProps {
	open?: boolean;
}

interface StyledFlyoutProps {
	open?: boolean;
}

const StyledDropdown = styled.div`
	box-sizing: border-box;
	width: 100%;
	max-width: 400px;
	border: 1px solid ${colors.grey70.toString()};
	border-radius: 3px;
	cursor: pointer;
	background: ${colors.white.toString()};
	color: ${colors.grey70.toString()};
	font-family: ${fonts().NORMAL_FONT};
	font-size: 16px;
	box-shadow: 0px 2px 3px 0px rgba(0, 0, 0, .25);
`;

const StyledText = styled.div`
	display: flex;
	justify-content: space-between;
	align-items: center;
	padding: 13px 22px;
`;

const StyledIcon = styled(Icon)`
	fill: ${colors.greenDark.toString()};
	${(props: StyledIconProps) => props.open
		? 'transform: rotate(180deg);'
		: 'transform: rotate(0deg);'
	}
`;

const StyledFlyout = styled.div`
	${(props: StyledFlyoutProps) => props.open
		? 'display: flex;'
		: 'display: none;'
	}
	flex-basis: 100%;
	flex-direction: column;
`;

const Dropdown: React.StatelessComponent<DropdownProps> = (props): JSX.Element => {
	return (
		<StyledDropdown
			onClick={props.onToggle}
		>
			<StyledText>
				{props.text}
				<StyledIcon name={IconName.ArrowDown} size={IconSize.XS} open={props.open} />
			</StyledText>
			<StyledFlyout
				open={props.open}
			>
				{props.children}
			</StyledFlyout>
		</StyledDropdown>
	);
};

export default Dropdown;
