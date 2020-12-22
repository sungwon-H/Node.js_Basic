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


---

</br>

- 예제.2

    ```jsx
    const relationship1 ={
        name:'won',
        friends: ['jin','woo','soo'],
        logFriends: function(){
            const that = this; // this는 realtionship1을 가리킨다
            this.friends.forEach(function (friend){ // realtionship1의 객체 안에 friends배열을 순차적으로 실행
                console.log(that.name, friend);
                /*
                won jin
                won woo
                won soo
                */ 
            });
        }
    }
    relationship1.logFriends();
    ```

    - logFriends 메서드의 this 값에 주목
    - forEach의 function의 this와 logFriends의 this는 다름
    - that이라는 중간 변수를 이용해서 logFriends의 this를 전달한다.
- 위 코드를 화살표 함수로 변경 할 경우

    ```jsx
    const relationship2 = {
        name: 'won',
        friends:['jin','woo','soo'],
        logFriends(){
            this.friends.forEach(friend =>{
                console.log(this.name, friend);
            });
        },
    };

    relationship2.logFriends();
    ```

    - forEach의 화살표함수의 this와 logFriends의 this가 같아졌다.
    - 화살표 함수는 자신을 포함하는 함수의 this를 물려받았다.
    - 물려받고 싶지 않을 때 :function(){}을 사용한다.

---