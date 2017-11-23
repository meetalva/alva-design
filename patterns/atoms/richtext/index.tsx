import * as React from 'react';

export interface RichTextProps {
  content: string;
}

const RichText: React.StatelessComponent<RichTextProps> = (props) =>
	<div dangerouslySetInnerHTML={{__html: props.content}} />
;

export default RichText;
