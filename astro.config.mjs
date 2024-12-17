// @ts-check
import { defineConfig } from 'astro/config';

import tailwind from '@astrojs/tailwind';

import react from '@astrojs/react';

// https://astro.build/config
export default defineConfig({
  integrations: [tailwind({
    applyBaseStyles: true,
  }), react()],
  site: 'https://bcrebel.github.io',
  base: 'portfolio',
});