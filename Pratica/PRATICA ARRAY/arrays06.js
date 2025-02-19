function numerosPositivos(num){
    return num.filter(pos => pos > 0)
}

console.log(numerosPositivos([3, -2, 4, -7, 8, -1]))