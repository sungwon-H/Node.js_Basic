function findAndSaveUser(Users){
    Users.findOne({})
    .then((user) =>{
        user.name = 'won';
        return user.save();
    })
    .then((user) =>{
        return Users.findOne({gender:'m'});
    })
    .then((user) =>{

    })
    .catch(err =>{
        console.error(err);
    })
}

// 아래내용처럼 표현 가능 

async function findAndSaveUser(Users){
    let user = await Users.fineOne({});
    user.name = 'won';
    user = await user.save();
    user = await Users.findOne({gender : 'm'});

}

// 에러 처리를 위해 try catch로 감싸주어야 한다.
async function findAndSaveUser(Users){
   try{
    let user = await Users.fineOne({});
    user.name = 'won';
    user = await user.save();
    user = await Users.findOne({gender : 'm'});
   }catch(error){
       console.error(error);
   }
}

// 화살표 함수로 사용 

const findAndSaveUser = async (Users) => {
    try{
        let user = await Users.fineOne({});
        user.name = 'won';
        user = await user.save();
        user = await Users.findOne({gender : 'm'});
       }catch(error){
           console.error(error);
       }
}