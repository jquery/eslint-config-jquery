module.exports = {
	globals: {
		window: true,
		define: true,
		module: true,
		Symbol: false
	},

	extends: "../../.eslintrc.js",

	root: true,

	rules: {

		// For the built version
		// TODO: do not use the built version to check the code
		"no-multiple-empty-lines": "off",
		"max-len": "off",
		"one-var": "off"
	}
};
