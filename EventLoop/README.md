# Node.js 이벤트 루프

## 이벤트 루프 예제 

</br>

1. [EventLoop1.js](#1.eventloop.js)
2. [EventLoop2.js](#2.eventloop.js)

---

</br>

### 1.EventLoop.js

- **호출 스택 및 이벤트 루프 예제(비동기 코드)**

    ```jsx
    function run(){
        console.log('3초 후 실행');
    }

    console.log('시작');
    setTimeout(run,3000);
    console.log('끝');
    ```

    - **위 내용의 실행 순서는 다음과 같다**
        1. 호출스택에 Anonymous가 베이스로 깔린다.
        2. 베이스 위에 console.log('시작'); 들어왔다가 실행되고 사라진다.
        3. setTimeout은 호출스택을 들어왔다가 백그라운드로 빠진다 (비동기)
        4. 다시 호출스택에는 다음 코드인 console.log('끝')이 실행되고 빠져나온다.
        5. 백그라운드에 있던 setTimeout가 3초뒤에 태스크큐로 이동한다(동시에일어남)
        6. 호출스택이 모두 비워지면  run(setTimeout)함수가 실행되면서 호출스택은 비워진다.
    ---
</br>

- **이벤트 루프 두번째 예제**

    ```jsx
    function oneMore(){
        console.log('one more');
    }
    function run(){
        console.log('run run');
        setTimeout(() => {
            console.log('wow');
        },0);
        new Promise((resolve) =>{
            resolve('hi');
        })
        .then(console.log);
        oneMore();
    }
    setTimeout(run, 5000);
    ```

    - **실행 순서**
        1. setTimeout(run, 5000)이 실행되면서 호출스택에는 anonymous가 베이스로 깔리고 그 위에 setTiemout가 실행된다.
        2. setTimeout은 비동기여서 백그라운드로 이동하게된다.
        3. run(setTimeout)은 백그라운드에서 5초 뒤에 태스크 큐로 이동한다.
        4. 태스크 큐에 있는 run은 다시 호출스택으로 가서 함수 내용을 실행한다.
        5. run 함수 설명

            ```jsx
             function run(){
                console.log('run run');
                setTimeout(() => {
                    console.log('wow');
                },0);
                new Promise((resolve) =>{
                    resolve('hi');
                })
                .then(console.log);
                oneMore();
            }
            ```

            1. console.log('run run'); 실행하여 콘솔 창에 첫번째로 입력
            2. setTimeout(() => {console.log('wow');},0); 비동기 이므로 백그라운드로 이동 후 0초여서 바로 태스크큐 대기
            3. new Promise((resolve) =>{resolve('hi'); }).then(console.log); Promise는 동기이지만 then을 만나게 되면 비동기로 된다.      
            그래서 백그라운드로 이동 후 태스크큐에서 대기한다.

        6. oneMore(); 함수 실행을 하여 'one more' 콘솔 창에 출력된다.
        7. 태스크 큐에는 지금 wow와 hi가 있지만 우선순위에 의해 Promise가 먼저 호출스택에 가고 값이 출력된다.('hi') 출력
        8. 마지막으로 wow 출력