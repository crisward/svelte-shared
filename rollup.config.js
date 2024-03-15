import svelte from 'rollup-plugin-svelte';
import css from 'rollup-plugin-import-css'
import resolve from '@rollup/plugin-node-resolve';
import terser from '@rollup/plugin-terser';

export default [
  {
    input:{
      index:'./src/index.js',
      another:'./src/another.js',
    },
    preserveEntrySignatures: 'strict',
    external: ['svelte','svelte/internal','svelte/animate','svelte/easing','svelte/motion','svelte/store','svelte/transition'],
    output: {
      sourcemap: process.env.NODE_ENV != "production",
      format: 'es',
      name: 'app',
      dir: 'build',
      manualChunks: undefined
    },
    plugins:[
      svelte({ emitCss: false }),
      css({ minify: true }),
      resolve(),
      terser()
    ]
  },
  {
    input: {
      svelte: 'src/svelte/svelte.js',
      internal: 'src/svelte/internal.js', 
      animate: 'src/svelte/animate.js', 
      easing: 'src/svelte/easing.js', 
      motion: 'src/svelte/motion.js', 
      store: 'src/svelte/store.js', 
      transition: 'src/svelte/transition.js', 
    },
    treeshake: false,
    output: {
      dir: 'build/svelte',
      format: 'esm',
      entryFileNames: '[name].js',
      chunkFileNames: '[name].js',
      // experimentalMinChunkSize: 10000
    },
    plugins: [resolve({browser: true}),terser()],
  }
];