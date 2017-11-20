'use strict';

module.exports = {
	formats: {
		less: {
			transforms: ['less']
		},
		tsx: {
			transforms: ['typescript', 'styled-components', 'react-to-markup']
		},
		jsx: {
			transforms: ['react', 'react-to-markup']
		},
		md: {
			transforms: []
		}
	},
	mount: {
	  format: 'tsx',
	  name: 'Components',
	  transforms: ['typescript', 'react-mount', 'browserify']
	}
};
