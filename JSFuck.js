const zero = '+[]'
const one = '+!![]'

const getNumber = (n) => {
    if (n === 0) return zero
    return Array.from({ length: n }, () => one).join(' + ')
}

//formChadetSingcup[space][backslash]

const fromString = (s) => s.split('').map((el) => {
    if (!(el in map)) {
        const charCode = el.charCodeAt(0)
        return `([]+[])[${fromString('constructor')}][${fromString('fromCharCode')}](${getNumber(charCode)})`
    }
    return map[el]
}).join(' + ')

const map = {}
map.a = `(+{} + [])[${getNumber(1)}]`
map.b = `({}+[])[${getNumber(2)}]`
map.o = `({}+[])[${getNumber(1)}]`
map.e = `({}+[])[${getNumber(4)}]`
map.c = `({}+[])[${getNumber(5)}]`
map.t = `({}+[])[${getNumber(6)}]`
map[' '] = `({}+[])[${getNumber(7)}]`
map.f = `(![]+[])[${getNumber(0)}]`
map.s = `(![]+[])[${getNumber(3)}]`
map.r = `(!![] + [])[${getNumber(1)}]`
map.u = `(!![] + [])[${getNumber(2)}]`
map.i = `((+!![]/+[])+[])[${getNumber(3)}]`
map.n = `((+!![]/+[])+[])[${getNumber(4)}]`
map.S = `([]+([]+[])[${fromString('constructor')}])[${getNumber(9)}]`
map.g = `([]+([]+[])[${fromString('constructor')}])[${getNumber(14)}]`
map.p = `([]+(/-/)[${fromString('constructor')}])[${getNumber(14)}]`
map['\\'] = `(/\\\\/+[])[${getNumber(1)}]`
map.d = `(${getNumber(13)})[${fromString('toString')}](${getNumber(14)})`
map.h = `(${getNumber(17)})[${fromString('toString')}](${getNumber(18)})`
map.m = `(${getNumber(22)})[${fromString('toString')}](${getNumber(23)})`
map.C = `(()=>{})[${fromString('constructor')}](${fromString('return escape')})()(${map['\\']})[${getNumber(2)}]`

const compile = (code) => `(()=>{})[${fromString('constructor')}](${fromString(code)})()`

console.log(compile(`
console.log(("b" + "a" + + "a" + "a").toLowerCase())
`))
