import commonjs from '@rollup/plugin-commonjs';
import image from '@rollup/plugin-image';
import typescript from '@rollup/plugin-typescript';
import { defineConfig } from 'rollup';
//@ts-ignore types package is broken - https://www.npmjs.com/package/@types/rollup-plugin-size-snapshot
import { sizeSnapshot } from 'rollup-plugin-size-snapshot';
import { terser } from 'rollup-plugin-terser';
import visualizer from 'rollup-plugin-visualizer';

import packageJson from './package.json';

const rollupConfig = defineConfig({
  input: `src/index.ts`,
  output: [
    {
      file: packageJson.module,
      format: 'esm',
      sourcemap: true,
    },
    {
      file: packageJson.main,
      name: packageJson.name,
      format: 'umd',
      sourcemap: true,
      globals: {
        react: 'React',
        'react-dom': 'ReactDOM',
        'react-tabs': 'react-tabs',
        'react-syntax-highlighter': 'react-syntax-highlighter',
      },
    },
  ],
  plugins: [
    commonjs(),
    typescript({
      tsconfig: './tsconfig.prod.json',
      declaration: true,
      declarationDir: 'types',
    }),
    sizeSnapshot(),
    terser({
      output: { comments: false },
      compress: {
        pure_getters: true,
      },
      // Compress and/or mangle variables in top level scope.
      toplevel: true,
    }),
    image(),
    visualizer({
      filename: 'bundle-analysis.html',
      title: `${packageJson.name} - Rollup Visualizer`,
      open: true,
    }),
  ],
  // Ensure dependencies are not bundled with the library
  external: [
    //...Object.keys(packageJson.dependencies || {}),
    ...Object.keys(packageJson.peerDependencies || {}),
  ],
});

// eslint-disable-next-line
export default rollupConfig;
