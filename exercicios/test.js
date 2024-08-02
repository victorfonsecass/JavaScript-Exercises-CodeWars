import { expect } from 'chai';
import {all} from '/home/victor/code/victorfonsecass/codeWars-exercicios/exercicios/exercicio1.js';

describe("Test", () => {
  it("should return true when all elements pass the test", () => {
    expect(all([1, 2, 3, 4, 5], v => v < 9)).to.be.true;
  });

  it("should return false when not all elements pass the test", () => {
    expect(all([1, 2, 3, 4, 5], v => v > 9)).to.be.false;
  });
});
