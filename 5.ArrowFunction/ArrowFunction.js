//기본 function
function add1(x,y) {
    return x+y;
};


// 화살표 함수 적용
const add2 = (x,y) => {
    return x+y;
};

// return문을 바로 줄여서 표현 할 수 있다.
const add3 = (x,y) => x+y;

//return 값을 구하기 헷갈리기때문에 ()표시
const add4 = (x, y) =>(x+y);

console.log('====================');


function not1(x){
    return !x;
}

//not1의 내용을 간결하게 표현
const not2 = x => !x;

