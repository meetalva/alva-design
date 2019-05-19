import * as React from "react";
import styled from "@emotion/styled";;
import { Color } from "../colors";
import { Button, ButtonOrder } from "../button";
import { Copy, CopySize } from "../copy";
import { Space, SpaceSize } from '../space';

export interface CookieNoticeProps {
	text: string;
	linkText: string;
	linkHref: string;
	buttonText: string;
	buttonOnClick?: React.MouseEventHandler;
}

const StyledBox = styled.div`
	background-color: #333;
	position: fixed;
	max-width: 320px;
	border-radius: 5px;
	right: ${SpaceSize.M}px;
	bottom: ${SpaceSize.M}px;
	padding: ${SpaceSize.S}px;
	z-index: 1000;

	@media screen and (max-width: 450px) {
		text-align: center;
		left: ${SpaceSize.S}px;
		right: ${SpaceSize.S}px;
		bottom: ${SpaceSize.S}px;
	}
`;

export const CookieNotice: React.StatelessComponent<CookieNoticeProps> = (props): JSX.Element => {
	return (
		<StyledBox>
			<Copy size={CopySize.Medium} color={Color.White}>{props.text} <Copy color={Color.Grey70}><a href={props.linkHref} target="_blank" style={{ textDecoration: 'none', color: 'inherit'}}>{props.linkText}</a></Copy></Copy>
			<Space size={SpaceSize.S} />
			<Button order={ButtonOrder.Primary} onClick={props.buttonOnClick}>{props.buttonText}</Button>
		</StyledBox>
	);
};
