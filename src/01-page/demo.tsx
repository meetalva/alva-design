import * as React from "react";
import Section from "../section";
import Headline, { HeadlineLevel } from "../headline";
import Copy, { Size as CopySize } from "../copy";
import Space, { SpaceSize } from "../space";
import { Color } from "../colors";
import Button, { ButtonOrder } from "../button";
import Footer from "../footer";
import Layout from "../layout";
import Menu from "../menu";
import MenuItem from "../menu-item";
import Feature, { FeatureLevel, Layout as FeatureLayout } from "../feature";
import Teaser from "../teaser";
import * as Types from "../types";
import { injectGlobal } from "styled-components";
import { Helmet } from "react-helmet";
import Link from '../link';

const renderStyledComponents = require("@patternplate/render-styled-components/render");

export const render = (input: any) => {
	const result = renderStyledComponents(input);
	const helmet = Helmet.renderStatic();

	result.head = [
		helmet.title.toString(),
		helmet.meta.toString(),
		result.head,
		helmet.link.toString(),
		helmet.style.toString()
	].join("\n");

	result.after = [
		result.after,
		helmet.script.toString()
	].join('\n');

	return result;
};

injectGlobal`
	body {
		margin: 0;
		padding: 0;
	}
`;

const MACOS_RELEASE = "https://github.com/meetalva/alva/releases/download/v0.8.0/Alva-0.8.0.dmg";
const WINDOW_RELEASE = "https://github.com/meetalva/alva/releases/download/v0.8.0/Alva-0.8.0.exe";
const LINUX_RELEASE = "https://github.com/meetalva/alva/releases/latest";

const Page: React.StatelessComponent<void> = (): JSX.Element => {
	return (
		<div style={{ overflow: "hidden" }}>
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
				<meta
					name="description"
					content="Create living prototypes with code components. Design with the same components your engineers are using for production."
				/>
				<meta name="viewport" content="width=device-width, initial-scale=1.0, user-scalable=yes" />
				<link rel="icon" href="https://media.meetalva.io/meta/icon_48.png" sizes="48x48" />
				<link rel="icon" href="https://media.meetalva.io/meta/icon_96.png" sizes="96x96" />
				<link rel="icon" href="https://media.meetalva.io/meta/icon_192.png" sizes="192x192" />
				<link rel="icon" href="https://media.meetalva.io/meta/alva.svg" type="image/x-icon"/>
			</Helmet>
			<Menu logo="https://media.meetalva.io/alva.svg">
				<MenuItem
					linkName="Get Started"
					target="_blank"
					rel="noopener"
					href="./doc/docs/guides/start?guides-enabled=true"
					title="Open Getting Started Tutorial"
				/>
				<MenuItem
					linkName="Twitter"
					target="_blank"
					rel="noopener"
					href="https://twitter.com/meetalva"
					title="Find us on Twitter"
				/>
			</Menu>
			<Section backgroundColor={Color.Black} textColor={Color.White}>
				<Headline level={HeadlineLevel.H1}>
					Create <u>living prototypes</u> with code components.
				</Headline>
				<Space size={SpaceSize.M} />
				<Layout maxWidth="640px">
					<Copy size={CopySize.Large}>
						Alva lets you to design interactive products based on the same components your
						developers are using for production websites. And guess what – we are entirely open
						source.
					</Copy>
				</Layout>
				<Space size={SpaceSize.L} />
				<a href={MACOS_RELEASE} target="_blank" rel="noopener">
					<Button order={ButtonOrder.Primary}>Download Beta for macOS</Button>
				</a>
				<Space size={SpaceSize.S} />
				<Copy color={Color.Grey70} size={CopySize.Small}>
					Also available for{" "}
					<a href={WINDOW_RELEASE} target="_blank" style={{ color: "#fff" }}>
						Windows
					</a>{" "}
					and{" "}
					<a href={LINUX_RELEASE} target="_blank" style={{ color: "#fff" }}>
						Linux
					</a>
				</Copy>
				<Space size={SpaceSize.XL} />
			</Section>

			<Feature
				featureLevel={FeatureLevel.Large}
				headline="Start your prototype with code components"
				copy="Connect to your compatible React library and start using the components of your developers for your prototype. Without writing a single line of code."
				layout={FeatureLayout.Center}
				frame={
					<video controls autoPlay loop style={{ display: "block", width: "100%" }}>
						<source src="https://media.meetalva.io/video/website-01.mp4" type="video/mp4" />
					</video>
				}
				link={
					<a href="./doc/docs/guides/essentials?guides-enabled=true" style={{textDecoration: 'none'}} target="_blank" rel="noopener">
						<Link color={Color.Violet}>
							Learn how to prototype with code components
						</Link>
					</a>
				}
				negativeTop
			/>
			<Space size={SpaceSize.XL} />
			<Feature
				featureLevel={FeatureLevel.Large}
				headline="Integrate your visual design drafts"
				copy="Add your latest design drafts from Sketch, Figma or any other design tool to your prototype and show your team how the next component should look like."
				layout={FeatureLayout.Left}
				frame={
					<img src="https://media.meetalva.io/video/website-02.png" style={{ display: "block" }} />
				}
				link={
					<a href="./doc/docs/guides/design?guides-enabled=true" style={{textDecoration: 'none'}} target="_blank" rel="noopener">
						<Link color={Color.Violet}>
							Learn how to integrate your designs
						</Link>
					</a>
				}
			/>
			<Space size={SpaceSize.XL} />
			<Feature
				featureLevel={FeatureLevel.Large}
				headline="Connect everything with interactions"
				copy="The web is interactive – so let’s design interactively, too. Go beyond static screens and design with interaction, data and logic in mind."
				layout={FeatureLayout.Right}
				frame={
					<img src="https://media.meetalva.io/video/website-03.png" style={{ display: "block" }} />
				}
				link={
					<a href="./doc/docs/guides/interaction?guides-enabled=true" style={{textDecoration: 'none'}} target="_blank" rel="noopener">
						<Link color={Color.Violet}>
							Learn how to work with interactions
						</Link>
					</a>
				}
			/>
			<Space size={SpaceSize.XL} />
			<Space size={SpaceSize.XL} />

			<Teaser
				image="https://media.meetalva.io/background.jpg"
				headline="Our mission is to enable designers and engineers to build better products together. Without friction."
			>
				<div style={{ padding: "56.25% 0 0 0", position: "relative" }}>
					<iframe
						src="https://www.youtube-nocookie.com/embed/gZT13EKfZXg"
						style={{
							position: "absolute",
							top: 0,
							left: 0,
							width: "100%",
							height: "100%",
							borderWidth: 0
						}}
						allow="autoplay; encrypted-media"
						allowFullScreen
					/>
				</div>
			</Teaser>

			<Section>
				<Layout maxWidth="480px">
					<Headline
						level={HeadlineLevel.H3}
						color={Color.Violet}
						fontWeight={Types.FontWeight.Light}
					>
						Stay tuned!
					</Headline>
					<Space size={SpaceSize.S} />
					<Copy>
						Alva is constantly evolving. Sign up with your email to be the first in line when we
						announce new features.
					</Copy>
					<Space size={SpaceSize.M} />
					<div id="mc_embed_signup">
						<form
							action="https://alva.us17.list-manage.com/subscribe/post?u=8f07560758ff52583a4f34f45&amp;id=d598cf405b"
							method="post"
							id="mc-embedded-subscribe-form"
							name="mc-embedded-subscribe-form"
							target="_blank"
							noValidate
						>
							<div
								id="mc_embed_signup_scroll"
								style={{
									display: "flex"
								}}
							>
								<input
									type="email"
									name="EMAIL"
									id="mce-EMAIL"
									placeholder="Email address"
									required
									style={{
										fontFamily: "Graphik, Arial",
										fontSize: "16px",
										padding: "10px 15px",
										border: `1px solid ${Color.Grey50}`,
										borderRightWidth: 0,
										borderRadius: "3px 0 0 3px"
									}}
								/>
								<div style={{ position: "absolute", left: "-100vw" }} aria-hidden="true">
									<input
										type="text"
										name="b_8f07560758ff52583a4f34f45_d598cf405b"
										tabIndex={-1}
										value=""
										readOnly
									/>
								</div>
								<input
									type="submit"
									value="Subscribe"
									name="subscribe"
									id="mc-embedded-subscribe"
									style={{
										fontFamily: "Graphik, Arial",
										fontSize: "16px",
										border: "none",
										padding: "0 15px",
										background: Color.Violet,
										color: Color.White,
										borderRadius: "0 3px 3px 0"
									}}
								/>
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
						For the last years most of the design tools have been expensive and proprietary
						software. We want to give something back to the community and start the next generation
						of design tools. Open-minded and open-source.
					</Copy>
				</Layout>
				<Space size={SpaceSize.L} />
				<a href="https://github.com/meetalva/alva/" target="_blank" rel="noopener">
					<Button order={ButtonOrder.Secondary} color={Color.Violet}>
						Contribute to Alva on Github
					</Button>
				</a>
				<Space size={SpaceSize.S} />
				<a href="https://twitter.com/intent/tweet?url=https%3A%2F%2Fmeetalva.io%2F&via=meetalva&text=Create%20living%20prototypes%20with%20code%20components.%20&hashtags=react%2C%20prototype">
					<Button order={ButtonOrder.Secondary} color={Color.Violet}>
						Tweet about us
					</Button>			
				</a>
			</Section>

			<Section backgroundColor={Color.Violet}>
				<Headline level={HeadlineLevel.H2} color={Color.White} fontWeight={Types.FontWeight.Light}>
					Getting Started
				</Headline>
				<Space size={SpaceSize.M} />
				<Layout maxWidth="640px">
					<Copy size={CopySize.Large} color={Color.White}>
						You’re new to Alva? Follow our easy-to-learn guides and shape a new era of product design.
					</Copy>
				</Layout>
				<Space size={SpaceSize.M} />
				<a href="./doc/docs/guides/start?guides-enabled=true" target="_blank" rel="noopener">
					<Button order={ButtonOrder.Secondary} color={Color.White}>
						Find our Guides
					</Button>
				</a>
			</Section>

			<Footer copyright="&copy; 2018 Alva">
				<MenuItem
					linkName="hey@meetalva.io"
					rel="noopener"
					href="mailto:hey@meetalva.io"
				/>
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
