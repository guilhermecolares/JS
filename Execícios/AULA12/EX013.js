var time = 'Palmeiras'
console.log (`Seu time é ${time}.`)

switch(time) {
    case 'Corinthians': {
        console.log('Corinthiano')
        break
    }
    case 'São Paulo': {
        console.log('São Paulino')
        break
    }
    case 'Santos': {
        console.log('Santista')
        break
    }
    case 'Palmeiras': {
        console.log('Palmeirense')
        break
    }
    default: 
        console.log('Time invalido.')
        break
}