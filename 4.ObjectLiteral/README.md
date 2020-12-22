## 객체 리터럴 

-  객체 리터럴 표기법을 간결하게 표현할 수 있다.
- 아래 예제를 통해 확인하기

- ES5 시절의 객체 표현 방법은 아래와 같다
    - 속성 표현 방식에 주목

        ```jsx
        const sayNode = function(){
            console.log('Node');
        };

        const es = 'ES';
        const oldObject= {
            sayJS:function(){
                console.log('JS');
            },
            sayNode: sayNode
        };

        oldObject[es+6]='Fantastic'; // 

        oldObject.sayNode(); // Node  oldObject객체 안에 sayNode실행
        oldObject.sayJS(); // JS oldObject객체 안에 sayJS 함수의 js 실행
        console.log(oldObject.ES6); // Fantastic
        ```

        - 위와 같은 코드문법을 간결하게 표현한 방식은 아래 내용과 같다

        ```jsx
        const newObject = {
            sayJS(){
                console.log('JS');
            },
            sayNode,
            [es + 6]:'Fantastic',
        };

        newObject.sayNode(); // Node
        newObject.sayJS(); //JS
        console.log(newObject.ES6); // Fantastic
        ```

        - 훨씬 간결한 문법으로 객체 리터럴 표현이 가능하다.
            - 객체의 메서드에 :function을 붙이지 않아도 된다.
            - {sayNode : sayNode}와 같은 것을 {sayNode}로 줄일 수 있다.
            - [변수 + 값] 등으로 동석 속성명을 객체 속성 명으로 사용이 가능하다.
---