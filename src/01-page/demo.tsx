import * as React from 'react';
import Section from '../section';
import Headline, { Level, FontWeight } from '../headline';
import Copy, { Size as CopySize } from '../copy';
import Space, { Size as SpaceSize} from '../space';
import { Color } from '../colors';
import Button, { ButtonOrder } from '../button';
import Layout from '../layout';
import Menu from '../menu';
import MenuItem from '../menu-item';
import Feature, { FeatureLevel, Layout as FeatureLayout } from '../feature';

const Page: React.StatelessComponent<void> = (): JSX.Element => {
	return (
		<div style={{overflow: "hidden"}}>
			<Menu>
				<MenuItem linkName="Get Started" onClick={() => alert('Click!')} />
			</Menu>
			<Section backgroundColor={Color.Black} textColor={Color.White}>
				<Headline level={Level.H1}>
					Create <u>living prototypes</u> with code components.
				</Headline>
				<Space size={SpaceSize.M} />
				<Layout maxWidth="640px">
					<Copy size={CopySize.Large}>
						Alva lets you to design interactive products based on the same components your developers are using for production websites. And guess what – we are entirely open source.
					</Copy>
				</Layout>
				<Space size={SpaceSize.L} />
				<Button order={ButtonOrder.Primary} onClick={() => alert('Click!')}>
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
				frame={ <img src="https://photojoseph.com/sites/default/files/sitegraphics/photomoments/PhotoJosephs_Photo_Moment_2018-04-20_FCPX_Project_NO_TEXT.jpg" /> }
				negativeTop
            />
            <Space size={SpaceSize.XL} />
            <Feature
                featureLevel={FeatureLevel.Medium}
                headline="Add your freshest design drafts"
                copy="Add design drafts directly from Sketch (or any other design tool) to Alva, so everybody can have a look at your latest thoughts. And as soon your team is happy, you can start developing a code component out of it."
                layout={FeatureLayout.Left}
                frame={ <img src="https://photojoseph.com/sites/default/files/sitegraphics/photomoments/PhotoJosephs_Photo_Moment_2018-04-20_FCPX_Project_NO_TEXT.jpg" /> }
            />
            <Space size={SpaceSize.XL} />
            <Feature
                featureLevel={FeatureLevel.Medium}
                headline="Connect everything with interactions"
                copy="The web is interactive, so we should design interactively, too. We enable you to go beyond static screens and if you want to – you can even create custom interactions with custom code."
                layout={FeatureLayout.Right}
                frame={ <img src="https://photojoseph.com/sites/default/files/sitegraphics/photomoments/PhotoJosephs_Photo_Moment_2018-04-20_FCPX_Project_NO_TEXT.jpg" /> }
            />
			<Space size={SpaceSize.XL} />

			<Section backgroundColor={Color.Grey95}>
				<Headline level={Level.H1} color={Color.Violet} fontWeight={FontWeight.Light}>
					<b>And wait for it</b> – we are entirely open source.
				</Headline>
				<Space size={SpaceSize.M} />
				<Layout maxWidth="640px">
					<Copy size={CopySize.Large} color={Color.Grey50}>
						For the last years most of the design tools have been expensive and proprietary software. We want to give something back to the community and start the next generation of design tools. Open-minded and open-source. 
					</Copy>
				</Layout>
				<Space size={SpaceSize.L} />
				<Button order={ButtonOrder.Secondary} color={Color.Violet} onClick={() => alert('Click!')}>
					Contribute to Alva on Github
				</Button>
			</Section>
		</div>
	);
};

export default Page;
