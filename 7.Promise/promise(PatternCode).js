function findAndSaveUser(users){
    users.findOne({}, (err, user)=>{
        if(err){
            return console.log(err);
        }
        user.name = 'zero';
        user.save((err) =>{
            if(err){
                return console.error(err);
            }
            users.findOne({gender:'m'}, (err,user)=>{
                if(err){
                    return console.error(err);
                }
            });
        });
    });
}
