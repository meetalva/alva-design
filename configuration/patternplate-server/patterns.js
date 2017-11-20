'use strict';

module.exports = {
	formats: {
		tsx: {
			transforms: ['typescript', 'styled-components', 'react-to-markup']
		}
	},
	mount: {
	  format: 'tsx',
	  name: 'Components',
	  transforms: ['typescript', 'react-mount', 'browserify']
	}
};
