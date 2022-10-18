let {expect} = require("chai");
const bookSelection = require("./solution");
describe("Tests …", function() {
    describe("isGenreSuitable", function() {
        it("Thriller …", function() {
            let genre = "Thriller"; 
            let age = 12;
            expect(bookSelection.isGenreSuitable(genre, age)).to.equal(`Books with ${genre} genre are not suitable for kids at ${age} age`);
        }); 
        it("Horror …", function() {
            let genre = "Horror"; 
            let age = 12;
            expect(bookSelection.isGenreSuitable(genre, age)).to.equal(`Books with ${genre} genre are not suitable for kids at ${age} age`);
        }); 
        it("Thriller fake…", function() {
            let genre = "Triller"; 
            let age = 12;
            expect(bookSelection.isGenreSuitable(genre, age)).to.equal(`Those books are suitable`);
        }); 
        it("Horror fake…", function() {
            let genre = "Horro"; 
            let age = 12;
            expect(bookSelection.isGenreSuitable(genre, age)).to.equal(`Those books are suitable`);
        }); 
    });
    describe("isItAffordable", function() {
        it("lower than 0 …", function() {
            expect(bookSelection.isItAffordable(10,2)).to.equal("You don't have enough money");
        }); 
        it("bought", function() {
            let budget = 20;
            let price = 10;
            let result = budget - price;
            expect(bookSelection.isItAffordable(price,budget)).to.equal(`Book bought. You have ${result}$ left`);
        });
        it("wrong price input …", function() {
            let budget = 20;
            let price = "a";
            expect(bookSelection.isItAffordable.bind(price,budget)).to.throw("Invalid input");
        }); 
        it("wrong budget input …", function() {
            let budget = "20";
            let price = 10;
            expect(bookSelection.isItAffordable.bind(price,budget)).to.throw("Invalid input");
        });  
    });
    describe("suitableTitles", function() {
        it("TODO …", function() {

        }); 
    });
});