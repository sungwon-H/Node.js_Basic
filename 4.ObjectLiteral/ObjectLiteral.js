const sayNode = function(){
    console.log('Node');
};

const es = 'ES';
const oldObject= {
    sayJS:function(){
        console.log('JS');
    },
    sayNode: sayNode
};

oldObject[es+6]='Fantastic'; // 

oldObject.sayNode(); // Node  oldObject객체 안에 sayNode실행
oldObject.sayJS(); // JS oldObject객체 안에 sayJS 함수의 js 실행
console.log(oldObject.ES6); // Fantastic

console.log('-------------');

const newObject = {
    sayJS(){
        console.log('JS');
    },
    sayNode,
    [es + 6]:'Fantastic',
};

newObject.sayNode(); // Node
newObject.sayJS(); //JS
console.log(newObject.ES6); // Fantastic