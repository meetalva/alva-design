import * as React from "react";
import styled from "styled-components";
import Copy, { Size as CopySize } from "../copy";
import colors from "../colors";

/*
* @name Input
*/

export interface InputProps {
	/** @name Type @default Text */ type?: Type;
	/** @name Disabled @default false */ disabled?: boolean;
	/** @name Label text @default Lorem Ipsum */ labelText?: string;
	/** @name Name @hidden */ name?: string;
	/** @name Value @default Lorem Ipsum */ value?: string;
	/** @name Error text @default Error Ipsum */ errorText?: string;
	/** @name Placeholder @default Lorem Ipsum */ placeholder?: string;
	/** @name On change */ onChange?: React.EventHandler<React.ChangeEvent<HTMLInputElement>>;
}

export interface InputState {
	value: string;
}

export enum Type {
	Text = "text",
	Number = "number",
	Email = "email"
}

const StyledLabel = styled.label`
	display: block;
	color: ${colors.black.toString()};
`;

const StyledLabelText = styled(Copy)`
	padding: 0 3px 9px;
`;

const StyledInput = styled.input`
	box-sizing: border-box;
	width: 100%;
	padding: 12px;
	border: 1px solid ${colors.grey70.toString()};
	border-radius: 3px;
	font-size: 15px;
	color: ${colors.black.toString()};

	${(props: InputProps) => (props.errorText ? `border-color: ${colors.red.toString()};` : "")};

	:focus {
		border-color: ${colors.blueLight.toString()};
		box-shadow: 0px 0px 2px 0px ${colors.blueLight.toString()};
		outline: 0;
	}
`;

const StyledError = styled(Copy)`
	padding: 9px 3px 0;
	color: ${colors.red.toString()};
`;

export default class Input extends React.Component<InputProps, InputState> {
	public constructor(props: InputProps) {
		super(props);
		this.state = { value: props.value || "" };
	}

	private handleChange(event: React.ChangeEvent<HTMLInputElement>) {
		this.setState({ value: event.target.value });
		if (this.props.onChange) {
			this.props.onChange(event);
		}
	}

	public render(): JSX.Element {
		const { labelText, type, name, placeholder, disabled, errorText } = this.props;
		const { value } = this.state;
		return (
			<StyledLabel>
				{labelText && (
					<StyledLabelText tagName="div" size={CopySize.Small} text={labelText} uppercase />
				)}
				<StyledInput
					type={type || Type.Text}
					value={value}
					name={name}
					placeholder={placeholder}
					disabled={disabled}
					errorText={errorText}
					onChange={event => this.handleChange(event)}
				/>
				{errorText && <StyledError tagName="div" size={CopySize.Small} text={errorText} />}
			</StyledLabel>
		);
	}
}
