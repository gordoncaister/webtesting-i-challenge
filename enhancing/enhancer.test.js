const enhancer = require('./enhancer.js');
// test away!
const sword = {
    name: "dark sword of oblivion",
    enhancement: 8,
    durability: 96 ,
}

describe("Test for enhancer", () =>{
    describe("Test for success", ()=>{
        it("Enhancement value should increase by 1", () =>{
            const actual = enhancer.succeed(sword);
            const expected = sword.enhancement + 1;
            if (actual < 20){
                expect(actual.enhancement).toBe(expected)
            }
        })
        it("Ehancement value should not change if enhancement is 20",() => {
            const actual = enhancer.succeed({...sword,enhancement:20})
            expect(actual.enhancement).not.toBeGreaterThan(20)
        })
    })
})