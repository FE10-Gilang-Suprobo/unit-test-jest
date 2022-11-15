const factorNumb = (num) => {
    let output = []
    for(let i = 1; i <= num; i++) {
        // check if number is a factor
        num % i == 0 && output.push(i)
    }
    return output
}

factorNumb(12)
module.exports = factorNumb;