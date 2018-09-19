import * as React from 'react';
import Section from '../section';
import Headline, { HeadlineLevel } from '../headline';
import Copy, { Size as CopySize } from '../copy';
import Space, { SpaceSize } from '../space';
import { Color } from '../colors';
import Button, { ButtonOrder } from '../button';
import Footer from '../footer';
import Layout from '../layout';
import Menu from '../menu';
import MenuItem from '../menu-item';
import Feature, { FeatureLevel, Layout as FeatureLayout } from '../feature';
import Teaser from '../teaser';
import * as Types from '../types';
import { injectGlobal } from 'styled-components';

injectGlobal`
	body {
		margin: 0;
		padding: 0;
	}
`;

const Page: React.StatelessComponent<void> = (): JSX.Element => {
	return (
		<div style={{overflow: "hidden"}}>
			<Menu logo="https://raw.githubusercontent.com/meetalva/media/master/alva.png">
				<MenuItem linkName="Get Started" onClick={() => window.open("./doc/docs/start?guides-enabled=true","_blank")} />
			</Menu>
			<Section backgroundColor={Color.Black} textColor={Color.White}>
				<Headline level={HeadlineLevel.H1}>
					Create <u>living prototypes</u> with code components.
				</Headline>
				<Space size={SpaceSize.M} />
				<Layout maxWidth="640px">
					<Copy size={CopySize.Large}>
						Alva lets you to design interactive products based on the same components your developers are using for production websites. And guess what – we are entirely open source.
					</Copy>
				</Layout>
				<Space size={SpaceSize.L} />
				<Button order={ButtonOrder.Primary} onClick={() => window.open("https://github.com/meetalva/alva/releases/latest","_blank")}>
					Download Beta for macOS
				</Button>
				<Space size={SpaceSize.S} />
				<Copy color={Color.Grey70} size={CopySize.Small}>Also available for <u>Windows</u> and <u>Linux</u></Copy>
				<Space size={SpaceSize.XL} />
			</Section>

			<Feature
                featureLevel={FeatureLevel.Large}
                headline="Start your design with live code components"
                copy="Connect to your code library and directly add the components your engineers are working with on live pages to your designs. Immediately try out the responsive behaviour of your page"
                layout={FeatureLayout.Center}
				frame={ <img src="https://raw.githubusercontent.com/meetalva/media/master/application.png" style={{display: "block"}} /> }
				negativeTop
            />
            <Space size={SpaceSize.XL} />
            <Feature
                featureLevel={FeatureLevel.Large}
                headline="Add your freshest design drafts"
                copy="Add design drafts directly from Sketch (or any other design tool) to Alva, so everybody can have a look at your latest thoughts. And as soon your team is happy, you can start developing a code component out of it."
                layout={FeatureLayout.Left}
                frame={ <img src="https://raw.githubusercontent.com/meetalva/media/master/application.png" style={{display: "block"}} /> }
            />
            <Space size={SpaceSize.XL} />
            <Feature
                featureLevel={FeatureLevel.Large}
                headline="Connect everything with interactions"
                copy="The web is interactive, so we should design interactively, too. We enable you to go beyond static screens and if you want to – you can even create custom interactions with custom code."
                layout={FeatureLayout.Right}
                frame={ <img src="https://raw.githubusercontent.com/meetalva/media/master/application.png" style={{display: "block"}} /> }
            />
			<Space size={SpaceSize.XL} />
			<Space size={SpaceSize.XL} />

			<Teaser
				image="https://images.unsplash.com/photo-1430572786910-927890ae3088?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=b07d84a891c5c71dbecb5f981161e043&auto=format&fit=crop&w=2250&q=80"
				headline="Our mission is to enable designers and engineers to build better products together. Without friction."
			>
				<div style={{padding: "56.25% 0 0 0", position: "relative"}}>
					<iframe src="https://player.vimeo.com/video/253654655?byline=0&portrait=0&title=0" style={{position: "absolute", top: 0, left: 0, width: "100%", height: "100%"}} allowFullScreen></iframe>
				</div>
				<script src="https://player.vimeo.com/api/player.js"></script>
			</Teaser>

			<Section backgroundColor={Color.Grey95}>
				<Headline level={HeadlineLevel.H1} color={Color.Violet} fontWeight={Types.FontWeight.Light}>
					<b>And wait for it</b> – we are entirely open source.
				</Headline>
				<Space size={SpaceSize.M} />
				<Layout maxWidth="640px">
					<Copy size={CopySize.Large} color={Color.Grey50}>
						For the last years most of the design tools have been expensive and proprietary software. We want to give something back to the community and start the next generation of design tools. Open-minded and open-source.
					</Copy>
				</Layout>
				<Space size={SpaceSize.L} />
				<Button order={ButtonOrder.Secondary} color={Color.Violet} onClick={() => window.open("https://github.com/meetalva/alva/","_blank")}>
					Contribute to Alva on Github
				</Button>
			</Section>

			<Footer copyright="&copy; 2018 Alva">
				<MenuItem linkName="Legal notice" onClick={() => window.open("./doc/docs/legalnotice?guides-enabled=true","_blank")} />
				<MenuItem linkName="Privacy Policy" onClick={() => window.open("./doc/docs/privacypolicy?guides-enabled=true","_blank")} />
			</Footer>
		</div>
	);
};

export default Page;
