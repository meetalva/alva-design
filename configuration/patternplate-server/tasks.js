module.exports = {
	'build-commonjs': {
		out: './lib',
		filters: {
			inFormats: ['tsx'],
			baseNames: ['index']
		},
		patterns: {
			formats: {
				tsx: {
					name: 'patterns',
					importStatement: localName => `import '${localName}';`,
					transforms: ['typescript', 'resolve-imports']
				}
			}
		},
		pkg: {
			name: 'patternlib',
			style: 'style'
		},
		transforms: {
			typescript: {
				inFormat: 'tsx',
				outFormat: 'js',
				opts: {
					target: 'es5',
					module: 'commonjs',
					jsx: 'react',
					declaration: true,
					baseUrl: '.',
					types: [
						'node'
					]
				}
			},
			'resolve-imports': {
				inFormat: 'js',
				outFormat: 'js',
				resolve: '%(outputName)s/%(patternId)s/index.%(extension)s'
			}
		}
	}
};
