import { defineConfig } from "vite";
import Vue from "@vitejs/plugin-vue";
import { ViteImageOptimizer } from "vite-plugin-image-optimizer";
import { fileURLToPath, URL } from "url";
import Checker from 'vite-plugin-checker';
export default defineConfig({
  base: '/Fasadstore.ru',
  build: {
    minify: "terser",
    terserOptions: {
      compress: {
        drop_console: true,
      },
      output: {
        comments: false,
      },
    },
  },
  plugins: [
    Vue(),
    Checker({
      typescript: true, // Включаем проверку TypeScript
      vueTsc: true, // Включаем строгую проверку .vue файлов
    }),
    ViteImageOptimizer({
      png: {
        // https://sharp.pixelplumbing.com/api-output#png
        quality: 80,
      },
      jpeg: {
        // https://sharp.pixelplumbing.com/api-output#jpeg
        quality: 80,
      },
      jpg: {
        // https://sharp.pixelplumbing.com/api-output#jpeg
        quality: 80,
      },
    }),
  ],
  resolve: {
    alias: [{ find: "@", replacement: fileURLToPath(new URL("./src", import.meta.url)) }],
  },
});
