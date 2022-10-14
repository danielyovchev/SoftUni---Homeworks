let isOddOrEven = require("../2. Even or Odd");
let {expect} = require("chai");
describe("undefinedTest", () => {
    it("return undefined if not string", () => {
        let input = 2;
        let result = isOddOrEven(input);
        expect(result).to.be.undefined;
    });
    it("return undefined if not string", () => {
        let input = [1,2];
        let result = isOddOrEven(input);
        expect(result).to.be.undefined;
    });
});
describe("evenTest", () => {
    it("return even", () => {
        let input = "even";
        let result = isOddOrEven(input);
        expect(result).to.equal("even");
    });
});
describe("oddTest", () => {
    it("return odd", () => {
        let input = "odd";
        let result = isOddOrEven(input);
        expect(result).to.equal("odd");
    });
});
