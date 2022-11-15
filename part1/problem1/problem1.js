 const scoreStudent = (score) => {
    
    let result = "";

    if (score >=80 && score <= 100) {
        result = "A"
      } else if (score >=65 && score <= 79) {
        result = "B+";
      } else if (score >=50 && score <= 64){
        result = "B"
      } else if (score >=35 && score <= 49) {
        result = "C"
      } else if (score >=0 && score <= 34) {
        result = "D"
      } else {
        result = "Invalid"
      }
      return result
}

module.exports = scoreStudent;