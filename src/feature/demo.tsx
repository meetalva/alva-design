import * as React from 'react';
import Feature, { FeatureLevel, Layout } from './index';
import Space, { SpaceSize } from '../space';

const FeatureDemo: React.StatelessComponent<void> = (): JSX.Element => {
	return (
        <div>
            <Space size={SpaceSize.XL} />
            <Feature
                featureLevel={FeatureLevel.Large}
                headline="Start your design with live code components"
                copy="Connect to your code library and directly add the components your engineers are working with on live pages to your designs. Immediately try out the responsive behaviour of your page"
                layout={Layout.Center}
                frame={ <img src="https://photojoseph.com/sites/default/files/sitegraphics/photomoments/PhotoJosephs_Photo_Moment_2018-04-20_FCPX_Project_NO_TEXT.jpg" /> }
            />
            <Space size={SpaceSize.XL} />
            <Feature
                featureLevel={FeatureLevel.Medium}
                headline="Add your freshest design drafts"
                copy="Add design drafts directly from Sketch (or any other design tool) to Alva, so everybody can have a look at your latest thoughts. And as soon your team is happy, you can start developing a code component out of it."
                layout={Layout.Left}
                frame={ <img src="https://photojoseph.com/sites/default/files/sitegraphics/photomoments/PhotoJosephs_Photo_Moment_2018-04-20_FCPX_Project_NO_TEXT.jpg" /> }
            />
            <Space size={SpaceSize.XL} />
            <Feature
                featureLevel={FeatureLevel.Medium}
                headline="Connect everything with interactions"
                copy="The web is interactive, so we should design interactively, too. We enable you to go beyond static screens and if you want to – you can even create custom interactions with custom code."
                layout={Layout.Right}
                frame={ <img src="https://photojoseph.com/sites/default/files/sitegraphics/photomoments/PhotoJosephs_Photo_Moment_2018-04-20_FCPX_Project_NO_TEXT.jpg" /> }
            />
            <Space size={SpaceSize.XL} />
        </div>
	);
};

export default FeatureDemo;
