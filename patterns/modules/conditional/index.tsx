import * as React from "react";

export interface ConditionalProps {
	/** @name Condition */ condition: string | boolean;
}

const Conditional: React.StatelessComponent<ConditionalProps> = (props): JSX.Element | null => {
	if (props.condition) {
		return <div>{props.children}</div>;
	} else {
		return null;
	}
};

export default Conditional;
