import { defineConfig } from 'astro/config';

import partytown from '@astrojs/partytown';

import sitemap from '@astrojs/sitemap';

// Site statique, sans JS côté client par défaut
export default defineConfig({
  // À remplacer par votre domaine final pour les balises canoniques
  site: 'https://keywordaitool.com',

  output: 'static',
  integrations: [partytown({
    config: {
      forward: ['dataLayer.push'],
    },
  }), sitemap()],
});