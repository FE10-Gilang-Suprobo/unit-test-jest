const arrayRemoveDuplicate = (array1, array2) => {
    let output 
    if(Array.isArray(array1) && Array.isArray(array2)){
        let array3 = [...new set([...array1,...array2])]
        output = array3
    } else {
        output = 'invalid'
    }
    return output
}

module.exports = arrayRemoveDuplicate