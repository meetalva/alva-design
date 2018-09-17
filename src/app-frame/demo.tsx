import * as React from 'react';
import AppFrame from './index';

const FeatureDemo: React.StatelessComponent<void> = (): JSX.Element => {
	return (
		<AppFrame>
            <div style={{padding: "56.25% 0 0 0", position: "relative"}}>
				<iframe 
					src="https://player.vimeo.com/video/253654655?background=1" 
					style={{position: "absolute", top: 0, left:0, width: "100%", height: "100%"}}
				>
				</iframe>
			</div>
		    <script src="https://player.vimeo.com/api/player.js"></script>
        </AppFrame>
	);
};

export default FeatureDemo;
