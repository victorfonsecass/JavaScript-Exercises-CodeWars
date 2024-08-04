import { expect } from 'chai';
import {all, calculateTip, contamination, myFirstKata,Sleigh, shortenToDate} from '/home/victor/code/victorfonsecass/codeWars-exercicios/exercicios/exercicio1.js';

describe("Test", () => {
  it("should return true when all elements pass the test", () => {
    expect(all([1, 2, 3, 4, 5], v => v < 9)).to.be.true;
  });

  it("should return false when not all elements pass the test", () => {
    expect(all([1, 2, 3, 4, 5], v => v > 9)).to.be.false;
  });
});

describe("Test", () => {
  it("test", () => {
Test.assertEquals(calculateTip(20, "Excellent"), 4);
Test.assertEquals(calculateTip(26.95, "good"), 3);

  });
});

describe("Test", () => {
  it("test", () => {
Test.assertEquals(contamination("abc","z"), "zzz")
Test.assertEquals(contamination("","z"), "")
Test.assertEquals(contamination("abc",""), "")
Test.assertEquals(contamination("_3ebzgh4","&"), "&&&&&&&&")
Test.assertEquals(contamination("//case"," "), "      ")
  });
});

describe("Test", () => {
  it("test", () => {
console.log("My Test Cases");
Test.assertEquals(myFirstKata(3,5),(3 % 5 + 5 % 3));
Test.assertEquals(myFirstKata("hello",3),false);
Test.assertEquals(myFirstKata(67,"bye"),false);
Test.assertEquals(myFirstKata(true,true),false);
Test.assertEquals(myFirstKata(314,107),(107 % 314 + 314 % 107));
Test.assertEquals(myFirstKata(19483,9),(9 % 19483 + 19483 % 9));
  });
});


describe("Santa's Sleigh", function() {
  var sleigh = new Sleigh();

  var testCredentials = function(name, password, correct) {
    Test.assertEquals(sleigh.authenticate(name, password), correct, 'Tested name "'+name+'" and password "'+password+'"');
  };

  it('must authenticate with correct credentials', function() {
    testCredentials('Santa Claus', 'Ho Ho Ho!', true);
  });

  it('must not authenticate with incorrect credentials', function() {
    testCredentials('Santa', 'Ho Ho Ho!', false);
    testCredentials('Santa Claus', 'Ho Ho!', false);
    testCredentials('jhoffner', 'CodeWars', false);
  });
});


describe("Test", () => {
  it("test", () => {
Test.assertEquals(shortenToDate("Friday May 2, 9am"), "Friday May 2");
Test.assertEquals(shortenToDate("Tuesday January 29, 10pm"), "Tuesday January 29");
Test.assertEquals(shortenToDate("Monday December 25, 10pm"), "Monday December 25");
  });
});
describe("Test", () => {
  it("test", () => {
var n = new NameMe('John', 'Doe');
Test.expect((typeof n.firstName != undefined && n.firstName == "John"), "Verifying First name. Object returned should contain the firstname: John");
Test.expect((typeof n.lastName != undefined && n.lastName == "Doe"), "Verifying Last name. Object returned should contain the lastname: Doe");
Test.expect((typeof n.name != undefined && n.name == "John Doe"), "Verifying full name. Object returned should contain the full name: John Doe");
  });
});
describe("Sample Tests", () => {
  it("Should pass Sample Tests", () => {
    assert.strictEqual(sayHello(['John', 'Smith'], 'Phoenix', 'Arizona'), 'Hello, John Smith! Welcome to Phoenix, Arizona!')
    assert.strictEqual(sayHello(['Franklin','Delano','Roosevelt'], 'Chicago', 'Illinois'), 'Hello, Franklin Delano Roosevelt! Welcome to Chicago, Illinois!')
    assert.strictEqual(sayHello(['Wallace','Russel','Osbourne'],'Albany','New York'), 'Hello, Wallace Russel Osbourne! Welcome to Albany, New York!')
  });
});
