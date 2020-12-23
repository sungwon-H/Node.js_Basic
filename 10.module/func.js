const {odd, even} = require('./var');

function checkOddOrEven(num){
    if(num % 2){ // 홀수일 경우
        return odd; // var.js의 odd인 홀수입니다, 출력
    }
    return even; // 홀수가 아닐경우 var.js의 even 짝수입니다 출력 
}

module.exports = checkOddOrEven; // 외부에서 사용 