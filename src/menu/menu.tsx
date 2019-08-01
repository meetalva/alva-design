import * as React from "react";
import styled from "@emotion/styled";
import { Color } from "../colors";
import { Image } from "../image";
import { Layout } from "../layout";

export interface MenuProps {
	/** @asset @name Logo */
	logo?: string;

	/** @name Sticky @default false */
	sticky?: boolean;

	children?: React.ReactNode;
}

const StyledWrapper = styled(Layout)<MenuProps & { backgroundColor: Color }>`
	position: ${props => (props.sticky ? "sticky" : "static")};
	top: 0;
	background-color: ${props => props.backgroundColor};
`;

const StyledMenu = styled.div`
	display: flex;
	width: 100%;
	justify-content: space-between;
	align-items: center;
	padding: 20px 40px;
	box-sizing: border-box;
	color: ${Color.Black};
`;

const StyledImage = styled(Image)`
	display: block;
	width: 55px;
	height: 20px;
`;

const StyledMenuInner = styled.div`
	display: flex;
	> * {
		display: none;
	}
	> :nth-of-type(1) {
		display: block;
	}
	> :nth-of-type(2) {
		display: block;
	}
	@media screen and (min-width: 420px) {
		> :nth-of-type(3) {
			display: block;
		}
	}
	@media screen and (min-width: 520px) {
		> :nth-of-type(4) {
			display: block;
		}
	}
	@media screen and (min-width: 620px) {
		> :nth-of-type(5) {
			display: block;
		}
	}
	@media screen and (min-width: 720px) {
		> :nth-of-type(6) {
			display: block;
		}
	}
`;

/**
 * @icon Menu
 */
export const Menu: React.StatelessComponent<MenuProps> = (props): JSX.Element => {
	return (
		<StyledWrapper backgroundColor={Color.White} sticky={props.sticky}>
			<Layout width="100%" maxWidth="1280px" center>
				<StyledMenu {...props}>
					<StyledImage src={props.logo} />
					<StyledMenuInner>{props.children}</StyledMenuInner>
				</StyledMenu>
			</Layout>
		</StyledWrapper>
	);
};
