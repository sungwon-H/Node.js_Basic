const url = require('url');
const querystring = require('querystring'); // 쿼리스트링 모듈 실행


const parsedUrl = url.parse('https://github.com/sungwon-H/Node.js_Basic/?page=3&limit=10&category=nodejs&category=javascript');
const query = querystring.parse(parsedUrl.query);
console.log('querystring.parse():',query);
console.log('querystring.stringify():', querystring.stringify(query));

