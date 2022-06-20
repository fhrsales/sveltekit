import adapterStatic from "@sveltejs/adapter-static";
import path from "path";

const config = {
	kit: {
		adapter: adapterStatic(),
		prerender: {
			default: true,
			onError: 'continue' // Para ignorar erros na compilação
		},

		files: {
			lib: "./src",
			assets: 'static', // na exportação guarda os arquivos estaticos em assets
			routes: './src/routes',
			template: './src/app.html'
		},

		paths: { 
			assets: "",
			base: "",
		},
		trailingSlash: 'ignore',

		vite: {
			resolve: {
				alias: {
					'$components': path.resolve('./src/components'),
					'$scripts': path.resolve('./src/scripts'),
					'$static': path.resolve('./static'),
					'$styles': path.resolve('./src/styles'),
					'$svg': path.resolve('./src/svg'),
				}
			},
			server: {
				fs: {
					allow: ['..'],
				},
			},
		}
	}
};

export default config;