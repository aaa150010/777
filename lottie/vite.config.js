import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue(),"~/plugins/lottie-vue-player.client.js"],
  server: {
    proxy: {
      "/api": {
        target: "http://shopadminapi.test/",
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/api/, ""),
      },
    },
  },
})
