import { ConfigEnv, ServerOptions, defineConfig, loadEnv } from 'vite';
import react from '@vitejs/plugin-react';
import tsconfigPaths from 'vite-tsconfig-paths';

const FALLBACK_PORT = '2137';
const FALLBACK_HOST = 'localhost';

export default defineConfig(({ mode }: ConfigEnv) => {
  process.env = { ...process.env, ...loadEnv(mode, process.cwd()) };

  const serverConfig: ServerOptions = {
    port: parseInt(process.env.VITE_PORT || FALLBACK_PORT),
    host: process.env.VITE_HOST || FALLBACK_HOST,
  };

  return {
    plugins: [react(), tsconfigPaths()],
    server: serverConfig,
  };
});
