import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import path from "path"; //추가

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    /**
     * 컴포넌트를 참조할 때, 절대경로를 참조하지 않아도 되는 편의성을 제공
     */
    alias: [
      {
        find: "@",
        replacement: path.resolve(__dirname, "src"),
      },
    ],
  },
});
