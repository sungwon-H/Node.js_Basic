console.log(this); // 전역객체 global
console.log(this === module.exports);
console.log(this === exports);

function whatIsThis(){
    console.log('function', this === exports, this=== global);

}
whatIsThis();
