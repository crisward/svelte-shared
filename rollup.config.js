import svelte from 'rollup-plugin-svelte';
import css from 'rollup-plugin-import-css'
import resolve from '@rollup/plugin-node-resolve';
import terser from '@rollup/plugin-terser';

export default [
  {
    input:{
      index1:'./src/index1.js',
      index2:'./src/index2.js',
    },
    preserveEntrySignatures: 'strict',
    external: [
      'svelte',
      'svelte/animate',
      'svelte/easing',
      'svelte/motion',
      'svelte/store',
      'svelte/transition',
      'svelte/internal',
      'svelte/internal/client',
      // 'svelte/internal/client/reactivity',
      // 'svelte/internal/shared/attributes',
      // 'svelte/internal/shared/clone',
      // 'svelte/internal/shared/errors',
      // 'svelte/internal/shared/validate',
      // 'svelte/internal/shared/warnings'
    ],
    output: {
      sourcemap: process.env.NODE_ENV != "production",
      format: 'es',
      name: 'app',
      dir: 'build',
      manualChunks: undefined
    },
    plugins:[
      svelte({ emitCss: true }),
      css({ minify: true,output: 'index.css'}),
      resolve(),
      terser()
    ]
  },
  {
    input: {
      svelte: 'src/svelte/svelte.js',
      internal: 'src/svelte/internal.js',
    },
    treeshake: false,
    output: {
      dir: 'build/svelte',
      format: 'esm',
      entryFileNames: '[name].js',
      chunkFileNames: '[name].js',
      // experimentalMinChunkSize: 10000
    },
    plugins: [resolve({browser: true},terser())],
  }
];