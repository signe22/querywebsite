import { defineConfig } from 'astro/config';

// Site statique, sans JS côté client par défaut
export default defineConfig({
  site: 'https://keywordaitool.com', // À remplacer par votre domaine final pour les balises canoniques
  output: 'static',
});
