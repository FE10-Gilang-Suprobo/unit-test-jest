const factorNumb = require("../problem2/problem2")

describe("factorNumb", () => {
    it("its factor number", () => {
        expect(factorNumb(20)).toEqual([1,2,4,5,10,20])
    })
})