import * as React from 'react';
import styled from 'styled-components';
import colors from '../colors';
import Copy from '../copy';

/**
 * @name Radio
 */

export interface RadioProps {
	/** @name Label Text @default Lorem Ipsum */ labelText?: string;
	/** @name Group Name @default radio1 */ groupName?: string;
	/** @name Value @default value */ value?: string;
	/** @name Checked @default false */ checked?: boolean;
	/** @name Disabled @default false */ disabled?: boolean;
	/** @name Handle Change @ignore */ handleChange?: React.EventHandler<
		React.ChangeEvent<HTMLInputElement>
	>;
}

interface StyledLabelProps {
	disabled?: boolean;
}

interface StyledRadioProps {
	checked?: boolean;
	disabled?: boolean;
}

const StyledRadioInput = styled.input`
	position: absolute;
	left: -100vw;
`;

const StyledLabel = styled.label`
	display: flex;
	align-items: center;
	color: ${colors.black.toString()};

	${(props: StyledLabelProps) => (props.disabled ? `color: ${colors.grey90.toString()};` : '')};
`;

const StyledRadio = styled.div`
	display: inline-flex;
	align-items: center;
	justify-content: center;
	width: 34px;
	height: 34px;
	border: 1px solid ${colors.grey70.toString()};
	border-radius: 50%;

	${(props: StyledRadioProps) =>
		props.disabled ? `border-color: ${colors.grey90.toString()};` : ''};

	/* RadioIndicator */
	::before {
		${(props: StyledRadioProps) => (props.checked ? 'display: block;' : 'display: none;')};
		content: '';
		width: 18px;
		height: 18px;
		border-radius: 50%;
		background: ${colors.green.toString()};
	}
`;

const StyledLabelText = styled(Copy)`
	padding-left: 12px;
`;

const Radio: React.StatelessComponent<RadioProps> = (props): JSX.Element => {
	const { disabled, groupName, value, handleChange, checked, labelText } = props;
	return (
		<StyledLabel disabled={disabled}>
			<StyledRadioInput type="radio" name={groupName} value={value} onChange={handleChange} />
			<StyledRadio checked={checked} disabled={disabled} />
			{labelText && <StyledLabelText>{labelText}</StyledLabelText>}
		</StyledLabel>
	);
};

export default Radio;
