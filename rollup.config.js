import typescript from 'rollup-plugin-typescript';
import { terser } from 'rollup-plugin-terser';
import filesize from 'rollup-plugin-filesize';

module.exports = {
  input: './src/index.ts',
  output: {
    file: './lib/index.js',
    format: 'esm',
  },
  plugins: [
    typescript(),
    terser({
      compress: {
        keep_fnames: true,
      },
    }),
    filesize(),
  ],
};
