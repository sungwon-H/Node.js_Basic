console.log('객체 구조분해');

const example ={a:123,b:{c:135, d:146}}

// const a = example.a; // a는 example객체안에 a를 저장 123
// const d = example.b.d; // b객체안에 d 를 상수 d에 저장

// console.log(a);
// console.log(d);

const {a, b:{d}} = example;
console.log(a);

console.log('-----------------------------');

const student = {
    x : '김모란',
    y : '이백합',
    z : {
        n:'이장미',
        m:'최철쭉'
    }
}

const {x,y,z:{n,m}} = student; // {a,b,c}에 student 객체 값을 저장
console.log(x);
console.log(y);
console.log(n);
console.log(m);

console.log('----------------변수 구조 분해----------');

// 오리지널 문법
arr = [1,2,3,4,5]
// const x1 = arr[0]
// const y1 = arr[1]
// const z1 = arr[4]

// console.log(x1);
// console.log(y1);
// console.log(z1);

// 변수 구조 분해 문법
// 배열은 자리가 같아야한다. 객체는 키가 같아야한다 
const [x1,y1,,,z1]= arr; // ,,,은 변수대입x

console.log(x1);
console.log(y1);
console.log(z1);