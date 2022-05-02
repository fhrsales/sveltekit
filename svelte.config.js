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
			// base: "/rabiscos/agenda-estadao/teste"
			// comentar o bloco paths se estiver rodando npm run dev. Colocar em base o caminho da pasta, exlcuindo https://arte.estadao.com.br. Não colocar barra no final do caminho
		},
		trailingSlash: 'ignore',

		vite: {
			resolve: {
				alias: {
					"$components": path.resolve("./src/components"),
					"$stores": path.resolve("./src/stores"),
					"$styles": path.resolve("./src/styles"),
					"$svg": path.resolve("./src/svg"),
					"$static": path.resolve("./src/static"),
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