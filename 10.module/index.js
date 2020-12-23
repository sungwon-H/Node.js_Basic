const { odd, even} = require('./var');
const checkNumber = require('./func');

function checkStringOddOrEven(str){
    if(str.length % 2){ // 문자열의 갯수가 홀수 일 경우
        return odd;
    }
    return even;
}

console.log(checkNumber(10)); // func.js 의 문법으로 홀수인지 짝수인지 판별
console.log(checkStringOddOrEven('hello')); // str.length 문자열갯수가 홀수면 odd출력 짝수면 even출력

