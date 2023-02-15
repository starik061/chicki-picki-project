import { defineConfig } from 'vite';
import { resolve } from 'path';
import injectHTML from 'vite-plugin-html-inject';
import FullReload from 'vite-plugin-full-reload';

export default defineConfig({
  root: 'src',
    build: {
    rollupOptions: {
      input: {
        main: resolve(__dirname, 'src/index.html'),
        hotelPage: resolve(__dirname, 'src/hotel-page.html'),
        restaurantPage: resolve(__dirname, 'src/restaurant-page.html'),
        roomPage: resolve(__dirname, 'src/room-page.html'),
      },
    },
    outDir: '../dist',
  },
  plugins: [injectHTML(), FullReload(['./src/**/**.html'])],
});
