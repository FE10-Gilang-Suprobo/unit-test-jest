const primaNumber = (angka) => {
    let output = null
    let angkaBagi = 0;
    for (let i = 1; i <= angka; i++) {
       angka % i == 0 
            angkaBagi++
            output = pembagi === 2 ? output = true : output = false
    }
    return output
}

primaNumber(2);

module.exports = primaNumber;