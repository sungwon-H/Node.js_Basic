if(true){
    var x = 3;
}
console.log(x);  // var은 함수스코프외에 외부에서 사용가능

function y(){
    var y = 1;
}
console.log(y);  // var은 함수스코프에 의해 외부 사용불가
console.log('----------------');

if(true){
    let a = 1;
}
console.log(a); // const,let는 블록스코프에 의해 외부에서 사용불가

function b(){
    const b = 2;
}
console.log(b); // 블록스코프에 의해 외부 사용 불가 