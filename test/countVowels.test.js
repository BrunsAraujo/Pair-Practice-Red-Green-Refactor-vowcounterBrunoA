/*const countVowels = require('../countVowels');
test("Count vowels returns correct numbers of vowels", () => {
    expect(countVowels("hello")).toBe(2);
});*/


const countVowels = require('../countVowels.js');


describe("countVowels function", () => {
  // Positive cases (normal expected usage)
  test("counts vowels in lowercase words", () => {
    expect(countVowels("hello")).toBe(2);
    expect(countVowels("world")).toBe(1);
    expect(countVowels("education")).toBe(5);
  });


  test("counts vowels in uppercase words", () => {
    expect(countVowels("AEIOU")).toBe(5);
    expect(countVowels("PYTHON")).toBe(1);
  });

test("handles mixed case correctly", () => {
    expect(countVowels("HeLLo WoRLd")).toBe(3);
  });


  // Negative cases (unexpected inputs)
  test("returns 0 when there are no vowels", () => {
    expect(countVowels("bcdfg")).toBe(0);
    expect(countVowels("rhythm")).toBe(0);
  });


  test("non-alphabetic characters in a mixed char string don't count as vowels", () => {
    expect(countVowels("12345")).toBe(0);
    expect(countVowels("!@#$%")).toBe(0);
    expect(countVowels("h55lo")).toBe(1); // only "o"
  });


  // Edge cases
  test("handles empty string", () => {
    expect(countVowels("")).toBe(0);
  });
 test("handles single-character strings", () => {
    expect(countVowels("a")).toBe(1);
    expect(countVowels("b")).toBe(0);
    expect(countVowels("E")).toBe(1);
  });


  test("handles long strings", () => {
    const longStr = "a".repeat(1000) + "b".repeat(1000);
    expect(countVowels(longStr)).toBe(1000);
  });


  test("handles strings with spaces and punctuation", () => {
    expect(countVowels("The quick, brown fox!")).toBe(5);
  });
});

/*
$ npm test

> practice-redgreenrefactor-vijayalakshmi-r@1.0.0 test
> jest

 PASS  tests/countVowels.test.js
  countVowels function
    √ counts vowels in lowercase words (2 ms)                                                                   
    √ counts vowels in uppercase words (1 ms)                                                                   
    √ handles mixed case correctly                                                                              
    √ returns 0 when there are no vowels                                                                        
    √ non-alphabetic characters in a mixed char string don't count as vowels (1 ms)                             
    √ handles empty string (1 ms)                                                                               
    √ handles single-character strings (1 ms)                                                                   
    √ handles long strings (1 ms)                                                                               
    √ handles strings with spaces and punctuation                                                               
                                                                                                                
Test Suites: 1 passed, 1 total                                                                                  
Tests:       9 passed, 9 total                                                                                  
Snapshots:   0 total
Time:        0.324 s, estimated 3 s
Ran all test suites.
*/