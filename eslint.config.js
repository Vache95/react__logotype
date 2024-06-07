import eslintReact from 'eslint-plugin-react';
import js from '@eslint/js';
import eslintConfig from 'eslint-config-prettier';
import prettierPlugin from 'eslint-plugin-prettier';
import simpleImport from 'eslint-plugin-simple-import-sort';
import globals from 'globals';
import tsEslint from '@typescript-eslint/parser';

export default [
	{
		plugins: {
			react: eslintReact,
			prettier: prettierPlugin,
			['simple-import-sort']: simpleImport,
			typesEslint: tsEslint,
		},
	},
	{
		ignores: [
			'node_modules',
			'build',
			'.env',
			'.env.example',
			// '.eslintrc.js',
			// '.gitignore',
			// '.env.jest.js',
			// 'i18n.ts',
			// 'vite.config.ts',
			// 'vite-env.d.ts',
			// 'codegen.ts',
			// 'src/apollo/graphql/**/*.tsx',
			// 'src/apollo/graphql/**/*.ts',
			// '**/types/**/*',
		],
	},
	js.configs.recommended,
	{
		languageOptions: {
			globals: {
				...globals.node,
				...globals.browser,
				...globals.es2021,
			},
		},
	},
	{
		files: ['src/**/*.{js,jsx,ts,tsx}'],
		rules: {
			...eslintConfig.rules,
			'simple-import-sort/imports': [
				'error',
				{
					groups: [
						[
							'next',
							'react',
							'^@?\\w',
							'pages',
							'layouts',
							'hoc',
							'routers',
							'components',
							'hooks',
							'helpers',
							'utils',
							'constants',
							'store',
							'services',
							'urls',
							'lib',
							'types',
							'assets',
							'^./',
							'^../../',
							'^.+\\.s?css$',
						],
					],
				},
			],
			'prettier/prettier': [
				'error',
				{
					printWidth: 120,
					semi: true,
					jsxSingleQuote: true,
					singleQuote: true,
					useTabs: true,
					arrowParens: 'avoid',
				},
			],
		},
	},
];
