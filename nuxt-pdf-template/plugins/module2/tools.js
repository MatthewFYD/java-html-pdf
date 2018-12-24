const reg = /[\u4E00-\u9FA5]/g

export const textWidthMap = {
  'cc': 11.96154,//汉字宽度
  'A': 6.85221,
  'B': 7.58845,
  'C': 7.22297,
  'D': 7.97835,
  'E': 6.81029,
  'F': 6.39887,
  'G': 8.02321,
  'H': 8.41332,
  'I': 3.25985,
  'J': 5.67372,
  'K': 7.40496,
  'L': 6.22663,
  'M': 9.41504,
  'N': 8.43350,
  'O': 8.67364,
  'P': 7.30832,
  'Q': 8.72545,
  'R': 7.29061,
  'S': 6.86922,
  'T': 6.96922,
  'U': 8.42709,
  'V': 6.64391,
  'W': 10.2558,
  'X': 6.55172,
  'Y': 6.04317,
  'Z': 7.06315,
  'a': 6.54361,
  'b': 7.14434,
  'c': 5.70948,
  'd': 7.22138,
  'e': 6.40263,
  'f': 3.59744,
  'g': 6.55747,
  'h': 7.06310,
  'i': 3.07079,
  'j': 3.09844,
  'k': 6.28429,
  'l': 3.19358,
  'm': 10.7902,
  'n': 7.08102,
  'o': 7.08229,
  'p': 7.28832,
  'q': 7.31304,
  'r': 4.32190,
  's': 5.42612,
  't': 3.94321,
  'u': 7.00679,
  'v': 5.89177,
  'w': 9.23827,
  'x': 5.48239,
  'y': 5.83346,
  'z': 5.41635,
  '1': 6.34909,
  '2': 6.34909,
  '3': 6.34909,
  '4': 6.34909,
  '5': 6.34909,
  '6': 6.34909,
  '7': 6.34909,
  '8': 6.34909,
  '9': 6.34909,
  '(': 3.76633,
  ')': 3.76633,
  '[': 3.76633,
  ']': 3.76633,
  ',': 3.00797,
  '.': 3.00465,
  '/': 4.72636,
  '|': 3.03019,
  '*': 5.27306,
  '+': 6.41601,
  '-': 4.00568,
};


export function getTextLine(text, width) {
  let line = 1
  let textWidth = 0
  for (let i = 0; i < text.length; i++) {
    let char = text.charAt(i)
    let charWidth;
    if (char.match(reg) || !textWidthMap.hasOwnProperty(char)) {
      charWidth = textWidthMap["cc"]
    } else {
      charWidth = textWidthMap[char]
    }
    if (textWidth + charWidth > width) {
      line++
      textWidth = charWidth
    } else {
      textWidth += charWidth
    }
  }
  return line
}

export function getTableText(text, width) {
  let newText = "";
  let textWidth = 0
  for (let i = 0; i < text.length; i++) {
    let char = text.charAt(i)
    let charWidth;
    if (char.match(reg) || !textWidthMap.hasOwnProperty(char)) {
      charWidth = textWidthMap["cc"]
    } else {
      charWidth = textWidthMap[char]
    }
    if (textWidth + charWidth > width) {
      textWidth = charWidth
      newText += "<br/>" + char;
    } else {
      textWidth += charWidth
      newText += char;
    }
  }
  return newText
}

export default {
  getTextLine: getTextLine,
  getTableText: getTableText,
}
