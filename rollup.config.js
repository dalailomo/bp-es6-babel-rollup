import babel from 'rollup-plugin-babel';
import babelrc from 'babelrc-rollup';

let config = {
  input: 'src/index.js',
  output: {
    file: 'bundle.js',
    format: 'umd',
    name: 'Test123',
    sourcemap: true
  }
};

export default config;
