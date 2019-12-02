const ml = require('multiline').stripIndent
const {
    fmt,
    sum,
} = require('.')

const calc = (raw) => { 
    const input = fmt(raw)
    const output = sum(input)
    return output
}

describe('day 1', () => {
    describe('part 1', () => {
        it('example 1', () => {
            const raw = ml(() => {/*
+1
+1
+1
            */})
            expect(calc(raw)).toBe(3)
        })
        it('example 2', () => {
            const raw = ml(() => {/*
+1
+1
-2
            */})
            expect(calc(raw)).toBe(0)
        })
        it('example 3', () => {
            const raw = ml(() => {/*
-1
-2
-3
            */})
            expect(calc(raw)).toBe(-6)
        })
    })
})
