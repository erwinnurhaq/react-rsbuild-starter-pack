import path from 'path';
import fs from 'fs';
import { defineConfig } from '@rsbuild/core';
import { pluginReact } from '@rsbuild/plugin-react';
import { pluginSvgr } from '@rsbuild/plugin-svgr';

export default defineConfig({
  plugins: [
    pluginReact(),
    pluginSvgr()
  ],
  tools: {
    sass: {
      sassOptions: {
        includePaths: [path.resolve(__dirname, "./src")]
      }
    }
  },
  output: {
    distPath: {
      root: 'build'
    }
  },
  source: {
    alias: {
      '~': path.join(__dirname, 'src')
    }
  },
  html: {
    template: path.resolve(__dirname, "./index.html"),
    templateParameters: {
      PUBLIC_TEST: process.env.PUBLIC_TEST
    }
  },
  server: {
    publicDir: {
      name: 'public',
      copyOnBuild: true,
    },
    port: 3000,
  }
});
