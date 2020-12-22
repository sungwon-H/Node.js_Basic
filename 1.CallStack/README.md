# Node.js 호출스택

### 호출스택 예제코드 설명 

</br>

- **호출스택 예시**

    ```jsx
    function first(){
        second();
        console.log('첫번째');
    }
    function second(){
        third();
        console.log('두번째');
    }
    function third(){
        console.log('세번째');
    }
    first();
    ```



- **호출 스택(함수의 호출, 자료구조의 스택)의 순서는 다음과 같다**
    1. 호출 스택에 Anonymous(**크롬에서 나온 단어**)는 가상의 전역 컨텍스트이다(항상 베이스로 깔린다.)
    2. 함수의 호출은 first → second → third 순으로 진행되며, 반대로 함수의 실행은 third → second → first 순으로 실행이된다.
    3. 함수는 실행이되고나면 호출 스택에서 사라진다.  
    4. Anonymous까지 사라지면 자바스크립트 실행이 완료가 된 것이다.
    - LIFO 구조라서 스택이라고 부른다

---

</br>

- [블로그 참조](https://develop-hsw9058.tistory.com/)