## var, const, let
---

- ES2015이전에는 var를 변수로 선언하여 사용했다
- ES2015이후에는 var대신 const, let로 대체되어 사용한다.
- 하지만 var도 알아두어야 하는 이유는 ES2015이전에 문법을 분석하기위해서 var의 특징 정도는 알아두어야한다.

---

- var과 const, let 의 가장 큰 차이점은 var은 함수 스코프이고 const,let는 블록스코프이다
- var은 function으로 감싸는 경우에 외부에서 사용 불가하고 const,let은 함수 및 블록 ({})에서도 사용이 불가하다.

    - var.js 예시

        ```jsx
        if(true){
            var x = 3;
        }
        console.log(x);  // var은 함수스코프외에 외부에서 사용가능

        function y(){
            var y = 1;
        }
        console.log(y);  // var은 함수스코프에 의해 외부 사용불가
        console.log('----------------');

        if(true){
            let a = 1;
        }
        console.log(a); // const,let는 블록스코프에 의해 외부에서 사용불가

        function b(){
            const b = 2;
        }
        console.log(b); // 블록스코프에 의해 외부 사용 불가
        ```
---
</br>

## const,let의 차이

</br>

- 상수에 할당한 값은 다른 값으로 변경이 불가하다.

- 변경하고자 할 때는 let으로 변수 선언한다.
- 상수 선언 시부터 초기화가 필요하다.
- 초기화를 하지 않고 선언하면 에러

</br>

---
- 예시

    ```jsx
    const a = 3;
    a = 5; // const는 한번 값을 저장하게되면 변경할 수 없으므로 에러가 난다 

    let b = 6;
    b = 7; // 초기 저장값을 변경하고 

    console.log(a);
    console.log(b);
    ```

- 하지만 const에서 객체의 값은 변경이 가능하다.

    ```jsx
    const x = {
        name : '홍길동',
        age : 26,
        birthday : 12-01,
    }
    console.log(x);

    x.name = 'hong'
    x.age = 25,

    console.log(x);
    ```
