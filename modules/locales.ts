import { resolve } from 'pathe';
import { defineNuxtModule } from '@nuxt/kit';
import { createCommonJS } from 'mlly';
const { __dirname } = createCommonJS(import.meta.url);

export default defineNuxtModule({
  setup(options, nuxt) {
    nuxt.hook('pages:extend', (pages: Array<any>) => {
      // Add region and locale to routes
      const localeRoutes = pages.map((page) => {
        return {
          name: `localized-${page.name}`,
          path: `/:locale${page.path}`,
          file: page.file,
          children: [],
        };
      });

      pages.push(...localeRoutes);
    });
  },
});
