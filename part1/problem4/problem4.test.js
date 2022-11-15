const checkPalindrome = require("./problem4")

describe("palindrome", () => {
    it("Will return true if its palindrome", () => {
        expect(checkPalindrome('civic')).toBe(true)
    })
})