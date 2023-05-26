import { sveltekit } from '@sveltejs/kit/vite';
import { defineConfig } from 'vite';
import { resolve } from 'path';

export default defineConfig({
  plugins: [sveltekit()],

  ssr: {
    noExternal: ['three', 'troika-three-text']
  },

  resolve: {
    alias: {
      three: resolve('node_modules/three')
    }
  }
});
