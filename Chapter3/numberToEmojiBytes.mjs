export function numberToEmojiBytes(number) {
  if (number < 0) {
    return "This function only accepts positive numbers";
  }

  if (number === 0) {
    return "\x30\xE2\x83\xA3";
  }

  var emojiNumbers = ["\x30\xE2\x83\xA3", "\x31\xE2\x83\xA3",
      "\x32\xE2\x83\xA3", "\x33\xE2\x83\xA3",
      "\x34\xE2\x83\xA3", "\x35\xE2\x83\xA3",
      "\x36\xE2\x83\xA3", "\x37\xE2\x83\xA3",
      "\x38\xE2\x83\xA3", "\x39\xE2\x83\xA3"];

  var digitsReversed = [];

  while (number >= 1) {
    digitsReversed.push(Math.floor(number%10));
    number /= 10;
  }

  var output = "";

  for(var i = digitsReversed.length; i > 0; i--) {
    output += emojiNumbers[digitsReversed[i-1]];
  }

  return output;
}

console.log(numberToEmojiBytes(19930429));