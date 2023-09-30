import vue from '@vitejs/plugin-vue';
import { fileURLToPath, URL } from "url";
import { defineConfig } from 'vite';

// https://vitejs.dev/config/
export default defineConfig({
	plugins: [vue()],
	resolve: {
		alias: [
			{ find: "@", replacement: fileURLToPath(new URL('./src', import.meta.url)) },
			{
				find: "@pages", replacement: fileURLToPath(new URL('./src/pages', import.meta.url))
			},
			{
				find: "@components", replacement: fileURLToPath(new URL('./src/components', import.meta.url))
			},
			{
				find: "@lib", replacement: fileURLToPath(new URL('./src/lib', import.meta.url))
			}
		]
	}
})
