const scoreStudent = require("../problem1/problem1")

describe("scoreStudent", () => {
    test("Test 1", () => {
        expect(scoreStudent(80)).toEqual("A")
    })
    test("Test 2", () => {
        expect(scoreStudent(75)).toEqual("B+")
    })
    test("Test 3", () => {
        expect(scoreStudent(95)).toEqual("A")
    })
    test("Test 4", () => {
        expect(scoreStudent(60)).toEqual("B")
    })
    test("Test 5", () => {
        expect(scoreStudent(30)).toEqual("D")
    })
    test("Test 6", () => {
        expect(scoreStudent(-1)).toEqual("Invalid")
    })
})