const pro1 = Promise.resolve('성공1');
const pro2 = Promise.resolve('성공2');


Promise.all([pro1, pro2])
.then((result) =>{
    console.log(result); // ['성공1','성공2']
})
.catch((error) =>{
    console.error(error);
    
});
