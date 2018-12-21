const path = require('path')
const fs = require('fs')
const R = require('ramda')

const fmt = R.pipe(
    R.split('\n'),
    R.dropLast(1),
    R.map(s => parseInt(s)),
)

const sum = (input) => {
    return R.reduce((sum, value) => sum + value, 0)(input)
}


const a = () => {
    const raw = fs.readFileSync(path.resolve(__dirname, './input.txt'), 'utf8')
    const input = fmt(raw)
    const output = sum(input)
    return output
}

module.exports = {
    fmt,
    sum,
    a,
}
