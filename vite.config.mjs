import fs from 'fs'
import path from 'path'
import { fileURLToPath, URL } from 'node:url'
import { defineConfig } from 'vite'
import { checker } from 'vite-plugin-checker'
import injectHTML from 'vite-plugin-html-inject'
import createSvgSpritePlugin from 'vite-plugin-svg-spriter'

const pagesDir = path.resolve(__dirname, './')
const pages = fs
  .readdirSync(pagesDir)
  .filter((file) => file.endsWith('.html'))
  .reduce((obj, file) => {
    const name = path.basename(file, '.html')
    obj[name] = path.resolve(pagesDir, file)
    return obj
  }, {})

export default defineConfig({
  base: './',
  plugins: [
    checker({
      eslint: {
        useFlatConfig: true,
        lintCommand: 'eslint "./src/**/*.{ts,js}"',
      },
      stylelint: {
        lintCommand: 'stylelint "**/*.{css,scss}"',
      },
    }),
    createSvgSpritePlugin({
      svgFolder: path.resolve(__dirname, 'src/assets/icons'),
    }),
    injectHTML(),
  ],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url)),
    },
  },
  css: {
    preprocessorOptions: {
      scss: {
        silenceDeprecations: ['legacy-js-api'],
        additionalData: `@use "@/assets/scss/general/variables.scss" as *; @use "@/assets/scss/abstracts/mixins.scss" as *;`,
      },
    },
  },
  build: {
    terserOptions: {
      compress: {
        drop_console: true,
        drop_debugger: true,
      },
      format: {
        comments: false,
      },
    },
    outDir: path.resolve(__dirname, 'dist'),
    emptyOutDir: true,
    rollupOptions: {
      input: {
        ...pages,
      },
    },
  },
})
