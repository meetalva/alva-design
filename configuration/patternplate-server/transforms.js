'use strict';

module.exports = {
	'browserify': {
		inFormat: 'js',
		outFormat: 'js',
		opts: {
			debug: true
		}
	},
	'react': {
		inFormat: 'jsx',
		outFormat: 'js'
	},
	'react-mount': {
		inFormat: 'js',
		outFormat: 'js'
	},
	'styled-components': {
	  inFormat: 'js',
	  outFormat: 'js'
	},
	'typescript': {
		inFormat: 'tsx',
		outFormat: 'js',
		opts: {
		  target: 'es5',
		  module: 'commonjs',
		  jsx: 'react'
		}
	 },
	 'react-to-markup': {
		inFormat: 'js',
		outFormat: 'html',
		opts: {
		  automount: true
		}
	 }
};
