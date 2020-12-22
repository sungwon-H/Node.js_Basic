const a = 3;
a = 5; // const는 한번 값을 저장하게되면 변경할 수 없으므로 에러가 난다 

let b = 6;
b = 7; // 초기 저장값을 변경하고 

console.log(a);
console.log(b);


// const 에서 객체의 값은 변경 가능하다.

const x = {
    name : '홍길동',
    age : 26,
    birthday : 12-01,
}
console.log(x);

x.name = 'hong'
x.age = 25,

console.log(x);