let lookupChar = require("../3. Char Lookup");
let {expect} = require("chai");

describe("undefinedTest", () => {
    it("return undefined if index is float", () => {
        let result = lookupChar("john", 3.3);
        expect(result).to.be.undefined;
    });
    it("return undefined if not string", () => {
        let result = lookupChar(4, 3);
        expect(result).to.be.undefined;
    });
});
describe("invalid index", () => {
    it("index out of bounds", () => {
        let text = "john";
        let index = 4;
        let result = lookupChar(text, index);
        expect(result).to.equal("Incorrect index");
    });
    it("index out of bounds", () => {
        let text = "john";
        let index = -1;
        let result = lookupChar(text, index);
        expect(result).to.equal("Incorrect index");
    });
});
describe("valid", () => {
    
    it("char at index 0", () => {
        let text = "john";
        let index = 0;
        let result = lookupChar(text, index);
        expect(result).to.equal('j');
    });
    it("char at index 1", () => {
        let text = "john";
        let index = 1;
        let result = lookupChar(text, index);
        expect(result).to.equal('o');
    });
});