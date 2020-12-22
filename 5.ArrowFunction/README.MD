## **화살표 함수**

- ECMA6에 추가된 문법입니다.
- function 키워드를 사용하여 함수를 만드는 것 보다 간략하게 표현합니다.
- fucntion을 완벽히 대체할 순 없다.
- 화살표 함수는 항상 익명 함수 입니다.

---

- 예제

    ```jsx
    //기본 function
    function add1(x,y) {
        return x+y;
    };

    // 화살표 함수 적용
    const add2 = (x,y) => {
        return x+y;
    };

    // return문을 바로 줄여서 표현 할 수 있다.
    const add3 = (x,y) => x+y;

    //return 값을 구하기 헷갈리기때문에 ()표시
    const add4 = (x, y) =>(x+y);

    console.log('====================');

    function not1(x){
        return !x;
    }

    //not1의 내용을 간결하게 표현
    const not2 = x => !x;
    ```

    - add1, add2, add3, add4는 같은 기능을 하는 함수이다
        - add2: add1함수를 화살표 함수로 바꾼함수이다.
        - add3: 함수의 본문이 return만 있는 경우 return 생략한다.
        - add4 : return이 생략된 함수의 본문을 소괄호로 감싸줄 수 있다.
        - not1과 not2도 같은 기능을 한다(매개변수 하나일 때 괄호 생략 가능하다.)