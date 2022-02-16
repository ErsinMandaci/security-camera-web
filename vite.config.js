import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],
  rollupPluginVueOptions: { cssModulesOptions: { generateScopedName: '[hash:base64:8]', }, }, css: { preprocessorOptions: { scss: { additionalData: `$injectedColor: orange;` } } }
})
