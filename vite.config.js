export default {
	build: {
		rollupOptions: {
			input: './src/app.js',
			output: {
				entryFileNames: '[name].js'
			}
		}
	}
};
