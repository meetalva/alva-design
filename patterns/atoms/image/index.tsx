import * as React from "react";
import styled from "styled-components";

export interface ImageProps {
	alt?: string;
	className?: string;
	src?: string;
	size?: string;
}

const StyledImage = styled.img`
	display: block;
	width: ${(props: ImageProps) => props.size || "100%"};
	object-fit: cover;
`;

const Image: React.StatelessComponent<ImageProps> = (props): JSX.Element => {
	return (
		<StyledImage alt={props.alt} className={props.className} src={props.src} size={props.size}/>
	);
};

export default Image;
