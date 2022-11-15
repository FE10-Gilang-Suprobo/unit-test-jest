const arrayRemoveDuplicate = require('./problem2')

describe('removeDuplicate', ()=> {
    it('will return new array', () => {
        expect(arrayRemoveDuplicate(["apel","anggur","pisang"],["apel","jeruk"])).toEqual(["apel","anggur","pisang","jeruk"])
    })
})