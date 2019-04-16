module.exports = {
	root: true,
	env: {
		node: true
	},
	'extends': [
		'plugin:vue/base',
		'plugin:vue/essential',
		'plugin:vue/strongly-recommended',
		'plugin:vue/recommended',
		'@vue/standard'
	],
	rules: {
		'no-console': process.env.NODE_ENV === 'production' ? 'error' : 'off',
		'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'off',
		'no-tabs': 'off',
		'indent': ['error', 'tab'],
		'vue/html-indent': ['error', 'tab']
	},
	parserOptions: {
		parser: 'babel-eslint'
	}
}