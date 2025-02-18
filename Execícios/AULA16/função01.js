function parouimpar(num1) {
    if(num1%2==0) {
        return 'par'
    } else {
        return 'impar'
    }
}

let res = parouimpar(10)
console.log(res)