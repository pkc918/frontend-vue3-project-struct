import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import UnoCSS from "unocss/vite";
import path from "path";
import { presetUno } from "unocss";
import presetRemToPx from "@unocss/preset-rem-to-px";
import AutoImport from "unplugin-auto-import/vite";
import Components from "unplugin-vue-components/vite";
import { ElementPlusResolver } from "unplugin-vue-components/resolvers";

let srcPath = path.resolve(__dirname, "./src")
// https://vitejs.dev/config/
export default defineConfig({
    define: {
        __VUE_OPTIONS_API__: false
    },
    plugins: [
        vue(),
        UnoCSS({
            presets: [
                presetUno(),
                presetRemToPx({
                    baseFontSize: 16
                })
            ],
            rules: [
                ["test-test", {fontSize: "18px"}],
                [/^p-(\d+)$/, (match: any) => ({padding: `${match[1] / 4}rem`})]
            ]
        }),
        AutoImport({
            resolvers: [ElementPlusResolver()],
            dts: path.resolve(srcPath, "auto-imports.d.ts")
        }),
        Components({
            resolvers: [ElementPlusResolver()],
            dts: path.resolve(srcPath, "components.d.ts")
        })
    ],
    resolve: {
        alias: {
            "@": path.resolve(__dirname, "src")
        }
    },
    server: {
        proxy: {
            "/m1": {
                target: "http://127.0.0.1:4523",
                changeOrigin: true,
                rewrite: (path) => path.replace(/^\/api/, "")
            }
        }
    }
});
