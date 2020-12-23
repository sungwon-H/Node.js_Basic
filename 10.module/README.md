## 모듈

- 노드는 자바스크립트 코드를 모듈로 만들 수 있다.
    - 모듈 : 특정한 기능을 하는 함수나 변수들의 집합을 의미한다.
    - 모듈로 만들면 여러 프로그램에서 재사용 가능하다.

### 모듈 만들어보기

- 같은 폴더 내에 var.js, func.js, inedx.js 만들기
    - 파일 끝에 module.exports를 사용하여 모듈로 만들어낼 값을 지정한다.(외부에서 사용하기위한 문법)
    - 다른 파일에서 require(파일 경로)로 그 모듈의 내용을 가져올 수 있다.

---

- var.js

    ```jsx
    const odd = '홀수 입니다.';
    const even = '짝수 입니다.';

    module.exports = { // 외부에서 사용하게하는 문법 
        odd,
        even
    }
    ```

- func.js

    ```jsx
    const {odd, even} = require('./var');

    function checkOddOrEven(num){
        if(num % 2){ // 홀수일 경우
            return odd; // var.js의 odd인 홀수입니다, 출력
        }
        return even; // 홀수가 아닐경우 var.js의 even 짝수입니다 출력 
    }

    module.exports = checkOddOrEven; // 외부에서 사용
    ```

- index.js

    ```jsx
    const { odd, even} = require('./var');
    const checkNumber = require('./func');

    function checkStringOddOrEven(str){
        if(str.length % 2){ // 문자열의 갯수가 홀수 일 경우
            return odd;
        }
        return even;
    }

    console.log(checkNumber(10)); // func.js 의 문법으로 홀수인지 짝수인지 판별
    console.log(checkStringOddOrEven('hello')); // str.length 문자열갯수가 홀수면 odd출력 짝수면 even출력const {odd, even} = require('./var');

    function checkOddOrEven(num){
        if(num % 2){ // 홀수일 경우
            return odd; // var.js의 odd인 홀수입니다, 출력
        }
        return even; // 홀수가 아닐경우 var.js의 even 짝수입니다 출력 
    }

    module.exports = checkOddOrEven; // 외부에서 사용
    ```

    - index.js 결과 값 (콘솔 창)

        ```powershell
        짝수 입니다.
        홀수 입니다.
        ```

       
    - const{odd, even} 부분은 module.exports를 구조분해 할당한 것입니다.

---

- 자바스크립트 자체 모듈 시스템 문법이 생겼다.
    - 아직 도느에서의 지원은 완벽하지 못하다. mjs 확장자를 사용해야 한다.
    - 크게는 require 대신 import, module.exports 대신 export defaule를 쓰는 것으로 바뀌었다.

        ```powershell
        const {odd, even} = require('./var') >> import {odd, even} from './var';

        function checkOddOrEven(num){
            if(num % 2){ // 홀수일 경우
                return odd; // var.js의 odd인 홀수입니다, 출력
            }
            return even; // 홀수가 아닐경우 var.js의 even 짝수입니다 출력 
        }

        module.exports = checkOddOrEven;  >> export default checkOddOrEven;
        ```

---