// rollup.config.js
import resolve from 'rollup-plugin-node-resolve';
import commonjs from 'rollup-plugin-commonjs';
import json from 'rollup-plugin-json';

export default {
  input: 'src/main.js',
  output: [{
    file: 'dist/bundle.cjs.js',
    format: 'cjs'
  },{
    file: 'dist/bundle.umd.js',
    format: 'umd',
    name: 'bundleName'
  },{
    file: 'dist/bundle.iife.js',
    format: 'iife'
  }],
  plugins: [
    resolve(),
    commonjs(),
    json()
  ]
};