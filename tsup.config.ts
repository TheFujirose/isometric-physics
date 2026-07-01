import { defineConfig } from 'tsup';

export default defineConfig({
  entry: ['src/index.ts'],
  format: ['cjs', 'esm'], // Output both CommonJS and ES Modules
  dts: true,             // Generate declaration files (.d.ts)
  splitting: false,
  sourcemap: true,
  clean: true,           // Clean the dist folder before building
});
