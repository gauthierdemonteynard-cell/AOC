import { defineConfig } from "vitest/config";
import path from "path";

export default defineConfig({
    resolve: {
        alias: {
            "@utils": path.resolve(__dirname, "src/utils"),
            "@days": path.resolve(__dirname, "src/days")
        }
    },
    test: {
        include: ["src/**/*.test.ts"]
    }
});