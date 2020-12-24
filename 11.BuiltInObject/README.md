# Node.js 내장 객체


</br>

### 목차
1. [Global](#global-객체)
2. [console](#console-객체)
3. [Timer](#타이머-메소드)
4. [filename, dirname](#filename,-dirname-내장-객체)
5. [module, exports](#module,-exports)
6. [this](#this-내장-객체)
7. [require](#require-내장-객체의-특성)
8. [Process](#process-내장-객체)
9. [process.env](#process.env)
10. [process.nextTick(콜백)](#process.nexttick(콜백))
11. [process.exit(코드)](#process.exit(코드))



---

</br>

### Global 객체

- **노드의 전역 객체**
    - 브라우저의 window같은 역할
    - 모든 파일에서 접근 가능
    - window처럼 생략도 가능(console, require도 global의 속성)(window,document는 동작하지 않는다)

        

---

- **global 속성 공유 예제**
    - global 속성에 값을 대입하면 다른 파일에서도 사용 가능
        - globalA.js

            ```jsx
            module.exports = () => global.message;
            ```

        - globalB.js

            ```jsx
            const A = require('./globalA');

            globalThis.message = '안녕하세요';
            console.log(A());
            ```

           

        - 이러한 예제처럼 코딩을 하기보단 원리만 알아두고 모듈로 만들어서 사용하자.

---
</br>

### console 객체

- 브라우저의 console 객체와 매우 유사하다.
    - console.time, console.timeEnd : 시간 로딩(time,timeEnd 사이에 코드의 수행시간을 체크해준다.)

        ```jsx
        console.time('test');
        코드
        console.timeEnd('test');
        ```

    - console.error : 에러 로깅
    - console.log : 평범한 로그
    - **console.dir : 객체 로깅(유용한)**
    - console.trace : 호출스택 로깅(함수안에서 사용하면 호출스택을 보여준다 <anonymous까지 보여준다>);

---

- **console  예제**

    ```jsx
    const string = 'abc';
    const number = 1;
    const boolean = true;
    const obj = {
        outside: {
            inside:{
                key : 'value',
            },
        },
    };
    console.time('전체 시간');
    console.log('평범한 로그입니다. 쉼표로 구분해 여러 값을 찍을 수 있습니다.');
    console.log(string, number, boolean);
    console.error('에러 메세지는 console.error에 담아주세요.');

    console.table([{name: 'won', birth: 1995}, {name:'hero', birth: 1975}]); // 테이블 생성

    console.dir(obj, {colors:false, depth: 2});
    console.dir(obj, {colors:true, depth: 1});

    console.time('시간 측정');
    for (let i=0; i< 2; i++){
        console.timeEnd('시간 측정');
    }

    function b() {
        console.trace('에러 위치 추적');
    }

    function a() {
        b();
    }
    a()

    console.timeEnd('전체 시간');
    ```

    - node console로 실행

    

---
</br>

### 타이머 메소드

- **set 메소드에 clear 메소드가 대응된다**
    - set 메소드의 리턴 값(아이디)를 clear 메소드에 넣어 취소

    (비동기 코드)

    - setTimeout(콜백함수, 밀리초) : 주어진 밀리초(1000분의 1초)이후에 콜백 함수를 실행합니다.(이후 실행)
    - setInterval(콜백함수, 밀리초) : 주어진 밀리초 마다 콜백 함수를 반복 실행합니다.(반복 실행)
    - setImmediate(콜백 함수) : 콜백 함수를 즉시 실행합니다. (특정한 코드들을 동시에 실행하게끔 사용)

    - clearTimeout(아이디) : setTimeout을 취소합니다.
    - clearInterval(아이디) : setInterval을 취소합니다.
    - clearImmediate(아이디) : setImmediate를 취소합니다.

---

- **타이머 예제**

    ```jsx
    const timeout = setTimeout(() =>{
        console.log('1.5초 후 실행');
    }, 1500);

    const interval = setInterval(() =>{
        console.log('1초마다 실행');
    },1000);

    const timeout2 = setTimeout(() =>{
        console.log('실행되지 않습니다.');
    }, 3000);

    setTimeout(() => {
            clearTimeout(timeout2);
            clearInterval(interval);
    }, 2500);
    const immediate = setImmediate(()=>{ // 비동기로 백그라운드에서 테스크큐로 넘어가서 실행
        console.log('즉시 실행');
    });

    const immediate2 = setImmediate(() =>{
        console.log('실행되지 않습니다.');
    });
    clearImmediate(immediate2); // 실행취소
    ```

    - 상수에 저장하는 이유는 나중에 취소하기위해서

  
---

</br>

### filename, dirname 내장 객체

- 노드에서는 브라우저와 다르게 컴퓨터에 접근이 가능하다.
- 파일들을 지우거나 생성할 수 있다.
- path와 조합하여 많이 쓰인다.
- __filename : 현재 파일 경로
- __dirname : 현재 폴더(디렉토리)경로

---

- **filename, dirname 예제**

    ```jsx
    console.log(__filename);
    console.log(__dirname);
    ```

   
---
</br>

### module, exports

- module.exports 외에도 exports로 모듈을 만들 수 있다.
- 동일하게 동작하는 이유는 module.exports와 exports가 참조 관계이기 때문이다.
- exports에 객체의 속성이 아닌 다른 값을 대입하면 참조 관계가 깨진다.

---

- **module 예제**
    - var.js

        ```jsx
        const odd = '홀수 입니다.';
        const even = '짝수 입니다.';

        module.exports = { // 외부에서 사용하게하는 문법 
            odd,
            even
        }
        ```

    - 위에 var.js 를 exports로 바꿔보기

        ```jsx
        const odd = '홀수 입니다.';
        const even = '짝수 입니다.';

        exports.odd = odd;
        exports.even = even;

        // module.exports = { // 외부에서 사용하게하는 문법 
        //     odd,
        //     even
        // }
        ```

      

        - 두 코드의 차이점은  원래는 기본 값이 둘다 빈 객체이지만 module.exports에 함수를 넣게되면

            서로 참조관계가 끊기게 된다. 

            ```jsx
            module.exports === exports === {} // 기본 값이 빈 객체 이다
            module.exports !== exports === {}  // module.exports에 함수가 들어 갈 경우 달라진다.

            ```

            - module.exports는 보통 한가지 리턴 할 경우 많이 쓰인다.
            - exports는 두 가지 이상 쓸때 많이 쓰인다.

---
</br>

### this 내장 객체

- 노드에서 this를 사용할 때 주의점이 있다.
    - 최상위 스코프의 this는 module.exports를 가리킨다.(전역 스코프 )
    - 그 외에는 브라우저의 자바스크립트와 동일하다.
    - 함수 선언문 내부의 this는 global(전역)객체를 가리킨다.

---
</br>

- **this 예제**

    ```jsx
    console.log(this); // 전역객체 global
    console.log(this === module.exports);
    console.log(this === exports);

    function whatIsThis(){
        console.log('function', this === exports, this=== global);

    }
    whatIsThis();
    ```

  

---

</br>

### require 내장 객체의 특성

- require가 코드상 제일 위에 올 필요는 없다.
- require.cache에 한 번 require한 모듈에 대한 캐슁 정보가 들어있다.

    (정보를 한번 읽고 나면 메모리에 저장을 한다(캐싱). 그래서 두번째 부터는 캐시를 불러오는 것이다.  )

- require.main은 노드 실행 시 첫 모듈을 가리킨다.

---

- **require 예제**

    ```jsx
    console.log('require가 가장 위에 오지 않아도 됩니다.');

    module.exports = "저를 찾아보세요";

    require('./test');

    console.log('require.cache입니다.');
    console.log(require.cache);
    console.log('require.main입니다.');
    console.log(require.main === module);
    console.log(require.main.filename);
    ```

    - require만 적고 변수나 상수를 선언하지 않게되면 실행만 가능하다.

---
</br>

### 순환참조

- 두 개의 모듈이 서로를 require하는 상황을 조심해야한다.

---

- Dep1.js와Dep2.js가 서로를 require할 경우 발생하는 문제점과 해결방법 예제
    - Dep1이 Dep2를 require하고, Dep2가Dep1을 require 하게되면 서로 호출하기때문에 무한반복이된다.
    - Node에서 알아서 순환참조가 일어나는경우 차단을 해준다. (빈 객체로 바꿔줌)

        - Dep1.js

            ```jsx
            const dep2 = require('./Dep2');
            console.log('require dep2', dep2);
            module.exports = () => {
                console.log('dep2',dep2);
            };
            ```

        - Dep2.js

            ```jsx
            const dep1 = require('./Dep1');
            console.log('require dep1', dep1);
            module.exports = () => {
                console.log('dep1',dep1);
            };
            ```

        - dep-run.js

            ```jsx
            const dep1 = require('./Dep1');
            const dep2 = require('./Dep2');

            dep1();
            dep2();
            ```

         

---
</br>

### Process 내장 객체

- 현재 실행중인 노드 프로세스에 대한 정보를 담고 있다.

---

- process 출력 값
    - process.version : 설치된 노드의 버전 확인
    - process.arch : 프로세서 아키텍처 정보입니다. arm, ia32등의 값일 수도 있습니다.
    - process.platform : 운영체제 플랫폼 정보입니다. linux나 darwin, freebsd 등의 값일 수도 있습니다.
    - [process.pid](http://process.pid) : 현재 프로세스의 아이디입니다. 프로세스를 여러 개 가질 때 구분할 수 있습니다.

        (프로세스를 강제종료 할 때 주로 사용 )

    - process.uptime() : 프로세스가 시작된 후 흐른 시간입니다 . 단위는 초입니다.
    - process.cwd() : 현재 프로세스가 실행되는 위치입니다.(node명령어를 어디서 실행했는지)
    - process.cpuUsage() : cpu 사용량 입니다.
    - process.execPath: 노드의 경로

    ```powershell
    process.version
    process.arch
    process.platform
    process.pid
    process.uptime()
    process.cwd()
    process.cpuUsage()
    process.execPath
    ```

   

---
</br>

### process.env

- 시스템 환경 변수들이 들어있는 객체
    - 비밀키(데이터베이스 비밀번호, 서드파티앱 키 등)를 보관하는 용도로 쓰인다.
    - 환경 변수는 process.env로 접근 가능
        - 비밀키 같은 경우 process.env안에 직접 저장하여 나중에 상수로 불러오는 식으로 그러면 코드가 해킹당하더라도 코드에는 실제 비밀번호가 적혀있지않고 process.env.임의값이 적힌다.

        ```jsx
        const secretId = process.env.SECRET_ID;
        const secretCode = process.env.SECRET_CODE; 
        ```

    - 일부 환경 변수는 노드 실행 시 영향을 미친다.
    - ex) NODE_POTIONS(노드 실행 옵션), UV_THREADPOOL_SIZE(스레드풀 개수)
        - max-old-space-size는 노드가 사용할 수 있는 메모리를 지정하는 옵션이다.

---


</br>


### process.nextTick(콜백)

- 이벤트 루프가 다른 콜백 함수들보다 nextTick의 콜백 함수를 우선적으로 처리한다.
    - 너무 남용하면 다른 콜백 함수들 실행이 늦어질 수 있다.
    - 비슷한 경우로 promise가 있다(nextTick처럼 우선순위가 높다)

---

- **process.nextTick 예제**

    ```jsx
    setImmediate(() => {
        console.log('immediate');
    });
    process.nextTick(()=>{
        console.log('nextTick');
    });
    setTimeout(() =>{
        console.log('timeout');
    }, 0);
    Promise.resolve().then(()=>{
        console.log('promise');
    });
    ```

    - 우선순위에 의해 실행된 순서

      

---
</br>

### process.exit(코드)

- 현재의 프로세스를 멈춘다.
    - 코드가 없거나 0이면 정상 종료
    - 이외의 코드는 비정상 종료를 의미한다.
    - 서버를 종료하고 싶을때 간간히 사용

---

- **process.exit 예제**

    ```jsx
    let i = 1;
    setInterval(() => {
        if(i === 5){
            console.log('종료');
            process.exit();
        }
        console.log(i);
        i += 1;
    }, 1000);
    ```

    - 1초에 한번씩 문자열 출력하고 if===5의해 마지막 5는 종료

       