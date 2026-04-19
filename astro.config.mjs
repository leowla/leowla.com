// @ts-check

import cloudflare from "@astrojs/cloudflare";
import tailwindcss from "@tailwindcss/vite";
import { defineConfig, fontProviders } from "astro/config";

// https://astro.build/config
export default defineConfig({
	site: "https://leowla.com",
	fonts: [
		{
			provider: fontProviders.local(),
			name: "Monaspace Radon",
			cssVariable: "--font-monaspace-radon",
			options: {
				variants: [
					{
						src: ["./src/assets/fonts/monaspace-radon-var.woff2"],
						weight: "100 900",
						style: "normal",
					},
				],
			},
		},
	],
	vite: {
		plugins: [tailwindcss()],
	},
	adapter: cloudflare({}),
});
