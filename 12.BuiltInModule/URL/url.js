const url = require('url');

const {URL} = url;

const myURL = new URL('https://github.com/sungwon-H/Node.js_Basic');

console.log('new URL():',myURL);
console.log('url.format():',url.format(myURL));
console.log('---------------------------------');

const parsedUrl = url.parse('https://github.com/sungwon-H/Node.js_Basic');
console.log('url.parse():', parsedUrl);
console.log('url.format():',url.format(parsedUrl));
