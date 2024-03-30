import { ConfigEnv, ServerOptions, defineConfig, loadEnv } from "vite";
import react from "@vitejs/plugin-react";
import tsconfigPaths from "vite-tsconfig-paths";

export default defineConfig(({ mode }: ConfigEnv) => {
  process.env = { ...process.env, ...loadEnv(mode, process.cwd()) };

  const serverConfig: ServerOptions = {
    port: parseInt(process.env.VITE_PORT || ""),
  };

  return {
    plugins: [react(), tsconfigPaths()],
    server: serverConfig,
  };
});
