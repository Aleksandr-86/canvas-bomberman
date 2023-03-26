import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import dotenv from 'dotenv'
import copy from 'rollup-plugin-copy'
dotenv.config()

// https://vitejs.dev/config/
export default defineConfig({
  base: '/canvas-bomberman/',
  build: {
    target: 'es2020',
    outDir: '../../docs',
    emptyOutDir: true,
    sourcemap: true,
  },
  server: {
    port: Number(process.env.CLIENT_PORT) || 3000,
  },
  define: {
    __SERVER_PORT__: process.env.SERVER_PORT || 3001,
  },
  ssr: {
    target: 'node',
    format: 'cjs',
  },
  plugins: [
    react(),
    /**
     * Создаёт файл 404.html, идентичный index.html, чтобы на Github Pages
     * приложение было доступно с любых путей.
     */
    copy({
      targets: [
        {
          src: '../../docs/index.html',
          dest: '../../docs/',
          rename: '404.html',
        },
      ],
      hook: 'writeBundle', // запускается после записи бандла на диск
      verbose: true,
    }),
  ],
})
