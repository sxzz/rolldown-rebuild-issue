import { rolldown } from 'rolldown'
// import { rollup as rolldown } from 'rollup'

const bundle = await rolldown({
  input: ['./input.js'],
})
await bundle.write({ format: 'esm', dir: './dist' })
// Execute twice
await bundle.write({ format: 'esm', dir: './dist' })
