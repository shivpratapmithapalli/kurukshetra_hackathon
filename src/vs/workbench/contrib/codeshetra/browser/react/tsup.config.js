/*--------------------------------------------------------------------------------------
 *  Copyright 2025 Glass Devtools, Inc. All rights reserved.
 *  Licensed under the Apache License, Version 2.0. See LICENSE.txt for more information.
 *--------------------------------------------------------------------------------------*/

import { defineConfig } from 'tsup'

export default defineConfig({
	entry: [
		'./src2/codeshetra-editor-widgets-tsx/index.tsx',
		'./src2/sidebar-tsx/index.tsx',
		'./src2/codeshetra-settings-tsx/index.tsx',
		'./src2/codeshetra-tooltip/index.tsx',
		'./src2/codeshetra-onboarding/index.tsx',
		'./src2/quick-edit-tsx/index.tsx',
		'./src2/diff/index.tsx',
	],
	outDir: './out',
	format: ['esm'],
	splitting: false,

	// dts: true,
	// sourcemap: true,

	clean: false,
	platform: 'browser', // 'node'
	target: 'esnext',
	injectStyle: true, // bundle css into the output file
	outExtension: () => ({ js: '.js' }),
	// default behavior is to take local files and make them internal (bundle them) and take imports like 'react' and leave them external (don't bundle them), we want the opposite in many ways
	noExternal: [ // noExternal means we should take these things and make them not external (bundle them into the output file) - anything that doesn't start with a "." needs to be force-flagged as not external
		/^(?!\.).*$/
	],
	external: [ // these imports should be kept external - fix the regex pattern
		/^\.\.\/\.\.\/\.\.\/.*\.js$/
	],
	treeshake: true,
	esbuildOptions(options) {
		options.outbase = 'src2'  // tries copying the folder hierarchy starting at src2

		// Add path mapping to resolve void directory references to codeshetra
		options.alias = {
			'workbench/contrib/void': 'workbench/contrib/codeshetra'
		}
	}
})
