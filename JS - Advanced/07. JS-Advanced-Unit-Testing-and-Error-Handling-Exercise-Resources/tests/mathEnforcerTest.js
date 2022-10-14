let {expect} = require("chai");
let mathEnforcer = require("../4. Math Enforcer");

describe("mathEnforcer", () => {
    describe("addFive", () => {
        it("return result with a non-num param", () => {
            expect(mathEnforcer.addFive('num')).to.be.undefined;
        });
        it('should return correct result with integer number', () => {
            expect(mathEnforcer.addFive(5)).to.equal(10);
        });
        it('should return correct result with negative number', () => {
            expect(mathEnforcer.addFive(-5)).to.equal(0);
        });
        it('should return correct result with floating number', () => {
            expect(mathEnforcer.addFive(5.5321321312312321)).to.be.closeTo(10.53, 0.01);
        });
    });
    describe("subtractTen", () => {
        it("return result with a non-num param", () => {
            expect(mathEnforcer.subtractTen('STRING')).to.be.undefined;
        });
        it('should return correct result with integer number', () => {
            expect(mathEnforcer.subtractTen(5)).to.equal(-5);
        });
        it('should return correct result with negative number', () => {
            expect(mathEnforcer.subtractTen(-5)).to.equal(-15);
        });
        it('should return correct result with floating number', () => {
            expect(mathEnforcer.subtractTen(5.5321321312312321)).to.be.closeTo(-4.46, 0.01);
        });
    });
    describe("sum", () => {
        it("return result with a non-num param", () => {
            expect(mathEnforcer.sum('num', 5)).to.be.undefined;
        });
        it("return result with a non-num second param", () => {
            expect(mathEnforcer.sum(5, 'num')).to.be.undefined;
        });
        it('should return correct result with integer number', () => {
            expect(mathEnforcer.sum(5, 12)).to.equal(17);
        });
        it('should return correct result with negative number', () => {
            expect(mathEnforcer.sum(-5, -10)).to.equal(-15);
        });
        it('should return correct result with floating number', () => {
            expect(mathEnforcer.sum(5.5321321312312321, 4)).to.be.closeTo(9.53, 0.01);
        });
        it('should return correct result with 2 floating numbers', () => {
            expect(mathEnforcer.sum(5.5321321312312321, 4.23)).to.be.closeTo(9.76, 0.01);
        });
    });
});