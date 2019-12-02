const path = require('path')
const fs = require('fs')
const R = require('ramda')


const fmt = R.pipe(
	R.split('\n'),
	R.dropLast(1),
	R.map(s => parseInt(s)),
)


const processEach = (input) => {
	return Math.floor(input / 3) - 2
}

const a = () => {
	const raw = fs.readFileSync(path.resolve(__dirname, './input.txt'), 'utf8')
	// console.log(raw)
	const input = fmt(raw)
	// console.log(input)
	const output = input.map(processEach)
	// console.log(output)
	const final = R.sum(output)
	console.log(final)
}

a()
