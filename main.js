import { rolldown } from 'rolldown'
// import { rollup as rolldown } from 'rollup'

const bundle = await rolldown({
  input: ['./input.js'],
})
await write()
// Execute twice
await write()

async function write() {
  await Promise.all([
    bundle.write({ format: 'esm', dir: './dist' }),
    bundle.write({ format: 'cjs', dir: './dist', entryFileNames: 'input.cjs' }),
  ])
}
