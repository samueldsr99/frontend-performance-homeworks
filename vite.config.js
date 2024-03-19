import { defineConfig } from "vite";
import { ViteImageOptimizer } from "vite-plugin-image-optimizer";
import { resolve } from "path";

export default defineConfig({
  plugins: [ViteImageOptimizer({})],
  build: {
    rollupOptions: {
      input: {
        index: resolve(__dirname, "index.html"),
        cart: resolve(__dirname, "cart.html"),
        checkout: resolve(__dirname, "checkout.html"),
        contact: resolve(__dirname, "contact.html"),
        detail: resolve(__dirname, "detail.html"),
        shop: resolve(__dirname, "shop.html"),
      },
    },
  },
});
