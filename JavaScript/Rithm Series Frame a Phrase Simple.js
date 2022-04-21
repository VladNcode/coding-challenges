/*
Carpe Diem! Yolo! On Fleek? Crushing it. You've got some awesome phrases that you want to hang up on your wall. The problem is that you don't have any frames laying around. So instead, you decide to write a program to create your frame.

Write a function called frame that will take two parameters as input: a phrase and optionally a character for the border of the frame.

frame("Yolo", '@');
Returns:

@@@@@@@@
@      @
@ Yolo @
@      @
@@@@@@@@
Notice that the framed phrase has a single space to the left and to the right. Also, there is an empty line both above and below the phrase.

If a second parameter is not given, assume the frame should be decorated using the * character.

You can assume that all phrases are a single line (no new line characters), and that the second parameter to the function (the frame character) is always a single character.

If an empty string is passed in, return an emtpy frame. For example:

frame("");
returns:

****
*  *
*  *
****
*/

function frame(phrase, ch) {
  if (!phrase) return '****\n*  *\n*  *\n****';
  if (!ch) ch = '*';
  const length = phrase.length + 4;
  let str = '';

  for (let i = 0; i < 5; i++) {
    if (i === 0 || i === 4) str += ch.repeat(length) + '\n';
    if (i === 1 || i === 3) str += ' '.repeat(length).replace(/(^ | $)/g, ch) + '\n';
    if (i === 2) str += `${ch} ${phrase} ${ch}\n`;
  }

  return str.replace(/\n$/, '');
}

console.log(frame('Yolo', ''));
