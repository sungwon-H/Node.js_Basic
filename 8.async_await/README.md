## Async/await

- 프로미스 패턴 코드의 연속적으로 나오는 .then을 async로 간략하게 작성할 수 있다.
    - 예제(프로미스 패턴 코드)

        ```jsx
        function findAndSaveUser(Users){
            Users.findOne({})
            .then((user) =>{
                user.name = 'zero';
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
        ```

    - Async/await 으로 위에 코드를 축약할 수 있다.

        ```jsx
        async function findAndSaveUser(Users){
            let user = await Users.fineOne({});
            user.name = 'won';
            user = await user.save();
            user = await Users.findOne({gender : 'm'});

        }
        ```

        - 변수 = await 프로미스인 경우 프로미스가 resolve된 값이 변수에 저장 된다.
        - 변수 await 값인 경우 그 값이 변수에 저장
    - 에러 처리를 위해 try catch로 감싸주어야함
        - 각각의 프로미스 에러 처리를 위해서는 각각을 try catch로 감싸주어야한다.

        ```jsx
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
        ```

    ---

    - 예제를 옮겨놓은 코드여서 실행하려면 주석처리 해야함