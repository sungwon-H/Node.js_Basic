## 프로미스

- 콜백 헬이라고 불리는 지저분한 자바스크립트 코드의 해결책
    - 프로미스: 내용이 실행은 되었지만 결과를 아직 반환하지 않은 객체
    - Then을 붙이면 결과를 반환함
    - 실행이 완료되지 않았으면 완료된 후에 Then 내부 함수가 실행된다.

---

- 예제

    ```jsx
    const condition = true; // true면 resolve, false면 reject

    const promise = new Promise((resolve, reject)=>{
        if(condition){
            resolve('성공');
        }else {
            reject('실패');
        }
        
    });

    promise
        .then((message) => {
            console.log(message); // 성공(resolve)한 경우 실행
        })
        .catch((error) =>{
            console.error(error); // 실패(reject)한 경우 실행
        })
        .finally(() =>{ // 끝나고 무조건 실행
            console.log('무조건');
        });
    ```

    - Resolve(성공리턴값) → then으로 연결
    - Reject(실패리턴값) → catch로 연결
    - Finally 부분은 무조건 실행된다.

---

- promise는 콜백함수와 분리되어있다. 예를들어 setTimeout 사용 할 경우에는 callback이 분리하기 위해선 코드가 복잡해진다.
- promise는 미리 선언을 해두고 다른 작업을 하다가 .then을 선언하여  미리 선언한 promise를 사용할 수 있다.
- Promise.resolve(성공리턴값) : 바로 resolve하는 프로미스
- Promise.reject(실패리턴값) : 바로 reject하는 프로미스

---

- promise.all (배열) 예제

    ```jsx
    const pro1 = Promise.resolve('성공1');
    const pro2 = Promise.resolve('성공2');

    Promise.all([pro1, pro2])
    .then((result) =>{
        console.log(result); // ['성공1','성공2']
    })
    .catch((error) =>{
        console.error(error);
        
    });
    ```

    - Promise.all(배열): 여러 개의 프로미스를 동시에 실행
        - 하나라도 실패하면 catch로 감
        - allSettled로 실패한 것만 추려낼 수 있음

---