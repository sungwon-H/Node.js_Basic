## **REPL**

- 자바스크립트는 스크립트 언어라서 즉석에서 코드를 실행
    - REPL이라는 콘솔 제공
        - R(Read),E(Evaluate),P(Print),L(Loop)
        - 윈도에서는 명령 프롬프트, 맥이나 리눅스에서는 터미널에 node 입력
    - 간단한 코드를 테스트하는 용도로 적합하다.
    - 긴 코드를 입력하기에는 부적합하다.
  
- JS 파일 실행하기

    ```jsx
    function helloWorld(){
        console.log('Hello World!');
        helloNode();
    }

    function helloNode() {
        console.log('Hello Node');
    }

    helloWorld();
    ```


---