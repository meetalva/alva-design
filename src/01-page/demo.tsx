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
import { Helmet } from "react-helmet";

injectGlobal`
	body {
		margin: 0;
		padding: 0;
	}
`;

const Page: React.StatelessComponent<void> = (): JSX.Element => {
	return (
		<div style={{overflow: "hidden"}}>
			<Helmet>
				<title>Meet Alva</title>
				<meta property="og:type" content="website" />
				<meta property="og:description" content="Create living prototypes with code components." />
				<meta property="og:image" content="https://media.meetalva.io/meta/og_image.png" />
				<meta name="twitter:card" content="summary_large_image" />
				<meta name="twitter:site" content="@meetalva" />
				<meta name="twitter:title" content="Meet Alva" />
				<meta name="twitter:description" content="Create living prototypes with code components." />
				<meta name="twitter:image" content="https://media.meetalva.io/meta/og_image.png" />
				<meta name="language" content="en" />
				<meta name="description" content="Create living prototypes with code components. Design with the same components your engineers are using for production." />
				<meta name="viewport" content="width=device-width, initial-scale=1.0, user-scalable=yes"></meta>
				<link rel="icon" href="https://media.meetalva.io/meta/icon_48.png" sizes="48x48" />
				<link rel="icon" href="https://media.meetalva.io/meta/icon_96.png" sizes="96x96" />
				<link rel="icon" href="https://media.meetalva.io/meta/icon_192.png" sizes="192x192" />
			</Helmet>
			<Menu logo="https://media.meetalva.io/alva.svg">
				<MenuItem
					linkName="Get Started"
					target="_blank"
					rel="noopener"
					href="./doc/docs/start?guides-enabled=true"
					title="Open Getting Started Tutorial"
					/>
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
				<a href="https://github.com/meetalva/alva/releases/latest" target="_blank" rel="noopener">
					<Button order={ButtonOrder.Primary}>
						Download Beta for macOS
					</Button>
				</a>
				<Space size={SpaceSize.S} />
				<Copy color={Color.Grey70} size={CopySize.Small}>Also available for <u>Windows</u> and <u>Linux</u></Copy>
				<Space size={SpaceSize.XL} />
			</Section>

			<Feature
                featureLevel={FeatureLevel.Large}
                headline="Start your prototype with code components"
                copy="Connect to your compatible React library and start using the components of your developers for your prototype. Without writing a single line of code."
                layout={FeatureLayout.Center}
				frame={ 
					<video controls autoPlay loop style={{ display: "block", width: "100%"}}>
  						<source src="https://media.meetalva.io/video/website-01.mp4" type="video/mp4"></source>
					</video>
				}
				negativeTop
            />
            <Space size={SpaceSize.XL} />
            <Feature
                featureLevel={FeatureLevel.Large}
                headline="Integrate your visual design drafts"
				copy="Add your latest design drafts from Sketch, Figma or any other design tool to your prototype and show your team how the next component should look like."
                layout={FeatureLayout.Left}
                frame={ <img src="https://raw.githubusercontent.com/meetalva/media/master/application.png" style={{display: "block"}} /> }
            />
            <Space size={SpaceSize.XL} />
            <Feature
                featureLevel={FeatureLevel.Large}
                headline="Connect everything with interactions"
                copy="The web is interactive – so let’s design interactively, too. Go beyond static screens and design with interaction, data and logic in mind."
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
					<iframe src="https://www.youtube-nocookie.com/embed/gZT13EKfZXg" style={{position: "absolute", top: 0, left: 0, width: "100%", height: "100%", borderWidth: 0}} allow="autoplay; encrypted-media" allowFullScreen></iframe>
				</div>
			</Teaser>

			<Section>
				<Layout maxWidth="480px">
					<Headline level={HeadlineLevel.H3} color={Color.Violet} fontWeight={Types.FontWeight.Light}>
						Stay tuned!
					</Headline>
					<Space size={SpaceSize.S} />
					<Copy>
						Alva is constantly evolving. Sign up with your email to be the first in line when we announce new features.
					</Copy>
					<Space size={SpaceSize.M} />
					<div id="mc_embed_signup">
						<form action="https://alva.us17.list-manage.com/subscribe/post?u=8f07560758ff52583a4f34f45&amp;id=d598cf405b" method="post"
						id="mc-embedded-subscribe-form" name="mc-embedded-subscribe-form" target="_blank" noValidate>
							<div id="mc_embed_signup_scroll" style={{
								display: "flex"
							}}>
								<input type="email" name="EMAIL" id="mce-EMAIL" placeholder="Email address" required style={{
									fontFamily: "Graphik, Arial",
									fontSize: "16px",
									padding: "10px 15px",
									border: `1px solid ${Color.Grey50}`,
									borderRightWidth: 0,
									borderRadius: '3px 0 0 3px'
								}}/>
								<div style={{position: "absolute", left: "-5000px"}} aria-hidden="true">
									<input type="text" name="b_8f07560758ff52583a4f34f45_d598cf405b" tabIndex={-1} value="" />
								</div>
								<input type="submit" value="Subscribe" name="subscribe" id="mc-embedded-subscribe" style={{
									fontFamily: "Graphik, Arial",
									fontSize: "16px",
									border: "none",
									padding: "0 15px",
									background: Color.Violet,
									color: Color.White,
									borderRadius: '0 3px 3px 0'
								}} />
							</div>
						</form>
					</div>
				</Layout>

			</Section>

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
				<a href="https://github.com/meetalva/alva/" target="_blank" rel="noopener">
					<Button order={ButtonOrder.Secondary} color={Color.Violet}>
						Contribute to Alva on Github
					</Button>
				</a>
			</Section>

			<Footer copyright="&copy; 2018 Alva">
				<MenuItem
					linkName="Proudly powered by SinnerSchrader"
					target="_blank"
					rel="noopener"
					href="https://sinnerschrader.com"
					/>
				<MenuItem
					linkName="Legal notice"
					target="_blank"
					rel="noopener"
					href="./doc/docs/legalnotice?guides-enabled=true"
					/>
				<MenuItem
					linkName="Privacy Policy"
					target="_blank"
					rel="noopener"
					href="./doc/docs/privacypolicy?guides-enabled=true"
					/>
			</Footer>
		</div>
	);
};

export default Page;
