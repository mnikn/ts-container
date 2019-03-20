import typescript from 'rollup-plugin-typescript';

export default {
    input: 'src/index.js',
    output: {
        name: 'containerLib',
        format: 'cjs',
        sourcemap: true
    },
    plugins: [
        typescript()
    ]
}