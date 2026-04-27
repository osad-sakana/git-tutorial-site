// @ts-check
import { defineConfig } from 'astro/config';

import tailwindcss from '@tailwindcss/vite';

// GitHub Actions からビルドする際は環境変数で site / base を渡す
// 例: SITE=https://username.github.io  BASE=/repo-name
const site = process.env.SITE ?? 'http://localhost:4321'
const rawBase = process.env.BASE ?? '/'
const base = rawBase.endsWith('/') ? rawBase : `${rawBase}/`

// https://astro.build/config
export default defineConfig({
  site,
  base,
  vite: {
    plugins: [tailwindcss()]
  }
});