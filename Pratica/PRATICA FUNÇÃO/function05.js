function palindromo(p) {
    let reverso = p.split('').reverse().join('')
    if(p == reverso) {
        return true
    } else {
        return false
    }
}

console.log(palindromo('arara'))
console.log(palindromo('hello'))