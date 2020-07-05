import assert from 'assert';
import { numberToEmojiBytes } from '../numberToEmojiBytes.mjs';

describe('numberToEmojiBytes', () => {
  describe('given a negative number', () => {
    it('returns an error message', () => {
      let result = numberToEmojiBytes(-2019);
      assert.equal(result, "This function only accepts positive numbers");
    });
  });
  describe('given 0', () => {
    it('returns the emoji byte representation of the number', () => {
      let result = numberToEmojiBytes(0);
      assert.equal(result, "\x30\xE2\x83\xA3");
    });
  });
  describe('given a two-digit number', () => {
    it('returns the emoji byte representation of the number', () => {
      let result = numberToEmojiBytes(93);
      assert.equal(result, "\x39\xE2\x83\xA3\x33\xE2\x83\xA3");
    });
  });
});