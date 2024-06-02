import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from 'path';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
      '@pages': path.resolve(__dirname,'./src/pages'),
      '@processes': path.resolve(__dirname,'./src/processes'),
      '@widgets': path.resolve(__dirname,'./src/widgets'),
      '@app': path.resolve(__dirname,'./src/app'),
      '@entities': path.resolve(__dirname,'./src/entities'),
      '@shared': path.resolve(__dirname,'./src/shared'),
      '@features': path.resolve(__dirname,'./src/features'),
    }
  }
})
