import { defineConfig } from 'vite'; // Ensure this is at the top
import react from '@vitejs/plugin-react';
export default defineConfig({
  plugins: [react()],
  base: '/',
});