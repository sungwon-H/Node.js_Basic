## Node.js 내장 모듈
<br/>

### 목차
1. [OS 모듈](#os-모듈)
2. [Path 모듈](#path-모듈)
3. [URL 모듈](#url-모듈)
4. [searchParams 모듈](#searchParams-모듈)
5. [Querystring 모듈](#querystring-모듈)
6. [단방향 암호화(crypto 모듈)](#단방향-암호화crypto-모듈)
7. [Hash 사용하기(sha512)](#hash-사용하기sha512)
8. [pbkdf2](#pbkdf2)
9. [양방향 암호화](#양방향-암호화)
10. [Util 모듈](#util-모듈)
11. [worker_threads 모듈](#worker-threads-모듈)
12. [여러 워커스레드 사용하기](#여러-워커스레드-사용하기)
13. [child_process 모듈](#child-process-모듈)




---
</br>

### OS 모듈

- 운영체제의 정보를 담고 있다.
    - 모듈은 require로 가져온다,(내장 모듈이라 경로 대신 이름만 적어줘도 된다.)

---

- **OS 모듈 메서드**
    - **os.arch():** os의 아키텍쳐 조회(process.arch와 동일)
    - **os.platform():**  운영체제 플랫폼 정보입니다. (process.platform과 동일합니다.)
    - **os.type():** 운영체제의 종류를 보여줍니다.
    - **os.uptime():** 운영체제 부팅 이후 흐른 시간(초)을 보여줍니다. process.uptime()은 노드의 실행 시간이었습니다.
    - **os.hostname():** 컴퓨터의 이름을 보여줍니다.
    - **os.release():** 운영체제의 버전을 보여줍니다.
    - **os.homedir():** 홈 디렉터리 경로를 보여줍니다.
    - **os.tmpdir():** 임시 파일 저장 경로를 보여줍니다.
    - **os.cpus():** 컴퓨터의 코어 정보를 보여줍니다.
    - **os.freemem():** 사용 가능한 메모리(RAM)를 보여줍니다.
    - **os.totalmem():** 전체 메모리 용량을 보여줍니다.

---

- **OS 예제**

    ```jsx
    const os = require('os'); // 노드에서 이미 모듈로 만들어져 있다.

    console.log('운영체제 정보-----------------------------------------');
    console.log('os.arch():',os.arch());
    console.log('os.platform():', os.platform());
    console.log('os.type():',os.type());
    console.log('os.uptime():',os.uptime());
    console.log('os.hostname():',os.hostname());
    console.log('os.release():',os.release());

    console.log('경로 ------------------------------------------------');
    console.log('os.homedir():',os.homedir());
    console.log('os.tmpdir():',os.tmpdir());

    console.log('cpu 정보 --------------------------------------');
    console.log('os.cpus():',os.cpus()); // 코어의 갯수를 파악할 수 있다.
    console.log('os.cpus().length:',os.cpus().length);

    console.log('메모리정보 --------------------------------');
    console.log('os.freemem():', os.freemem()); // 메모리를 얼마나 사용하는지 
    console.log('os.totalmem():',os.totalmem());
    ```

    - console.log('os.cpus():',os.cpus()); // 코어의 갯수를 파악할 수 있다.
    - console.log('os.freemem():', os.freemem()); // 메모리를 얼마나 사용하는지

---

- **OS 공식 문서**

    [Node.js v15.5.0 Documentation](https://nodejs.org/dist/latest-v14.x/docs/api/os.html)

---
</br>

### Path 모듈

- 폴더와 파일의 경로를 쉽게 조작하도록 도와주는 모듈입니다.
    - 운영체제별로 경로 구분자가 다르다(Window: '\', POSIX: '/')

---

- **Path 모듈 메소드**
    - **path.sep:** 경로의 구분자입니다. Windows는 \, POSIX는 /입니다.
    - **path.delimiter:** 환경 변수의 구분자입니다. process.env.PATH를 입력하면 여러 개의 경로가 이 구분자로 구분되어 있습니다.

                                  **Windows는 세미콜론(;)이고 POSIX는 콜론(:)입니다.**

    - **path.dirname(경로):** 파일이 위치한 폴더 경로를 보여줍니다. // 폴더경로 추출
    - **path.extname(경로):** 파일의 확장자를 보여줍니다. // 확장명 추출
    - **path.basename(경로, 확장자):** 파일의 이름(확장자 포함)을 보여줍니다. 파일의 이름만 표시하고 싶다면 basename의 두 번째 인자로 파일의 확장자를 넣어주면 됩니다. //
    - **path.parse(경로):** 파일 경로를 root, dir, base, ext, name으로 분리합니다.
    - **path.format(객체):** path.parse()한 객체를 파일 경로로 합칩니다.
    - **path.normalize(경로):** /나 \를 실수로 여러 번 사용했거나 혼용했을 때 정상적인 경로로 변환해줍니다.
    - **path.isAbsolute(경로):** 파일의 경로가 절대경로인지 상대경로인지 true나 false로 알려줍니다.
    - **path.relative(기준경로, 비교경로):** 경로를 두 개 넣으면 첫 번째 경로에서 두 번째 경로로 가는 방법을 알려줍니다.
    - **path.join(경로, .. .):** 여러 인자를 넣으면 하나의 경로로 합쳐줍니다. 상대경로인 ..(부모 디렉터리)과 .(현 위치)도 알아서 처리해줍니다.
    - **path.resolve(경로, .. .):** path.join()과 비슷하지만 차이가 있습니다.

---
</br>

- **Path 모듈 예제**

    ```jsx
    const path = require('path');

    const string = __filename;

    console.log('path.sep:',path.sep);
    console.log('path.delimiter:',path.delimiter);
    console.log('----------------------------------');
    console.log('path.dirname():', path.dirname(string));
    console.log('path.extname():',path.extname(string));
    console.log('path.basename():',path.basename(string));
    console.log('path.basename - extname:', path.basename(string, path.extname(string)));
    console.log('------------------------------------------------------------');
    console.log('path.parse():',path.parse(string));
    console.log('path.format():', path.format({
        dir: 'D:\Node.js_Basic\12.BuiltInModule\Path\path.js',
        name: 'path',
        ext: '.js',
    }));
    console.log('path.normalize():', path.normalize('D://Node.js_Basic\\\\12.BuiltInModule\\\Path\\\path.js'));
    console.log('-------------------------------------------------------');
    console.log('path.isAbsolute(D:\\)',path.isAbsolute('D:\\'));
    console.log('path.isAbsolute(./home)',path.isAbsolute('./home'));
    console.log('---------------------------------');
    console.log('path.relative():', path.relative('D:\\Node.js_Basic\\12.BuiltInModule\\Path\\path.js', 'D:\\'));
    console.log('path.join():',path.join(__dirname,'..','..','/users','.','/path'));
    console.log('path.resolve():',path.resolve(__dirname,'..','users','.','/path'));
    ```

    
---
</br>

- **Path 관련 정보(TIP)**
    - **join과 resolve의 차이 : resolve는 /를 절대경로로 처리하고, join은 상대경로로 처리**
        - 상대경로 : 현재 파일 기준 . 같은 경로면 점 하나(.), 한단계 상위 경로면 점 두 개(..)
        - 절대 경로는 루트 폴더나 노드 프로세스가 실행되는 위치가 기준이다.
    - **\\와\차이 :** \는윈도 경로 구분자 , \\는 자바스크립트 문자열 안에서 사용(\가 특수문자라 \\로 중복으로 사용 이스케이프 해준 것)
    - 윈도에서 POSIX path를 쓰고 싶다면: path.posix 객체 사용
        - POSIX에서 윈도 path를 쓰고 싶다면 : path.win32 객체 사용

---
</br>

### URL 모듈

- 인터넷 주소를 쉽게 조작하도록 도와주는 모듈
    - url 처리에 크게 두 가지 방식이 있다.(기존 노드방식과 WHATWG 방식)
    - 아래 그림에서 가운데 주소를 기준으로 위쪽은 기존 노드 방식, 아래 쪽은 WHATWG방식이다

       

---

- **URL 모듈 메서드**
    - 기존 노드 방식 메서드
        - url.parse(주소): 주소를 분해합니다. WHATWG 방식과 비교하면 username과 password대신 auth속성이 있고, searchParams대신 query가 있습니다.
        - url.format(객체) : WHATWG 방식의 url과 기존 노드의 url 모두 사용할 수 있습니다. 분해되었던 url 객체를 다시 원래 상태로 조립합니다.

---

- **URL 모듈 예제**

    ```jsx
    const url = require('url');

    const {URL} = url;

    const myURL = new URL('https://github.com/sungwon-H/Node.js_Basic');

    console.log('new URL():',myURL);
    console.log('url.format():',url.format(myURL));
    console.log('---------------------------------');

    const parsedUrl = url.parse('https://github.com/sungwon-H/Node.js_Basic');
    console.log('url.parse():', parsedUrl);
    console.log('url.format():',rul.fromat(parsedUrl));
    ```

    - url 모듈 안에 URL 생성자가 있습니다. 이 생성자에 주소를 넣어 객체로 만들면 주소가 부분별로 정리됩니다.
    - 이 방식이 WHATWG의 url입니다. WHATWG에만 있는 username, password, origin, searchParams 속성이 존재합니다.
    - 결과

---
</br>

### searchParams 모듈

- WHATWG 방식에서 쿼리스트링(search)부분 처리를 도와주는 객체이다.
    - ex) ?page=3&limit=10&category=nodejs&category=javascript 부분 (주소에 데이터가 담겨 있는 부분) 이 부분을 객체로 변경하는 것

---
</br>

- **searchParams 예제**

    ```jsx
    const {URL} = require('url');

    const myURL = new URL('https://github.com/sungwon-H/Node.js_Basic/?page=3&limit=10&category=nodejs&category=javascript');
    console.log('searchParams:', myURL.searchParams);
    console.log('searchParams.getAll():', myURL.searchParams.getAll('category'));
    console.log('searchParams.get():', myURL.searchParams.get('limit'));
    console.log('searchParams.has():',myURL.searchParams.has('page'));

    console.log('searchParams.keys():', myURL.searchParams.keys());
    console.log('searchParams.values():',myURL.searchParams.values());

    myURL.searchParams.append('filter','es3');
    myURL.searchParams.append('filter', 'es5');
    console.log(myURL.searchParams.getAll('filter'));

    myURL.searchParams.set('filter','es6');
    console.log(myURL.searchParams.getAll('filter'));

    myURL.searchParams.delete('filter');
    console.log(myURL.searchParams.getAll('filter'));

    console.log('searchParams.toString():', myURL.searchParams.toString());
    myURL.search = myURL.searchParams.toString();
    ```

   

    - **getAll(키)**: 키에 해당하는 모든 값들을 가져옵니다. category 키에는 두 가지 값, 즉 nodejs와 javascript의 값이 들어있습니다.
    - **get(키) :** 키에 해당하는 첫 번째 값만 가져옵니다.
    - **has(키) :** 해당 키가 있는지 없는지를 검사합니다.
    - **keys() :** searchParams의 모든 키를 반복기(iterator, ES2015 문법) 객체로 가져옵니다.
    - **values() :** searchParams의 모든 값을 반복기 객체로 가져옵니다.
    - **append(키, 값):** 해당 키를 추가합니다. 같은 키의 값이 있다면 유지하고 하나 더 추가합니다.
    - **set(키, 값) :** append와 비슷하지만 같은 키의 값들을 모두 지우고 새로 추가합니다.
    - **delete(키) :** 해당 키를 제거합니다.
    - **toString() :** 조작한 searchParams 객체를 다시 문자열로 만듭니다 . 이 문자열을 search에 대입하면 주소 객체에 반영됩니다.

---
</br>

### Querystring 모듈

- 기존 노드 방식에서는 url querystring을 querystring 모듈로 처리한다.
    - querystring.parse(쿼리) : url의 query 부분을 자바스크립트 객체롤 분해해줍니다.
    - querystring.stringify(객체) : 분해된 query 객체를 문자열로 다시 조립해줍니다.

---
</br>

- **querystring 예제**

    ```jsx
    	const url = require('url');
    const querystring = require('querystring'); // 쿼리스트링 모듈 실행

    const parsedUrl = url.parse('https://github.com/sungwon-H/Node.js_Basic/?page=3&limit=10&category=nodejs&category=javascript');
    const query = querystring.parse(parsedUrl.query);
    console.log('querystring.parse():',query);
    console.log('querystring.stringify():', querystring.stringify(query));
    ```

  

---
</br>

### 단방향 암호화(crypto 모듈)

- **암호화는 가능하지만 복호화는 불가능 하다.**
    - 암호화 : 평문을 암호로 만드는 것
    - 복호화 : 암호를 평문으로 해독하는 것

- **단방향 암호화의 대표 주자는 해시 기법**
    - 문자열을 고정된 길이의 다른 문자열로 바꾸는 방식
    - abcdefgh 문자열 → qvew (비밀번호는 주로 hash함수로 쓰인다 )
    - ex)비밀번호가 hsw인데 이것을 해시코드로 바꾸게되면 wer가 된다.

        항상 hsw → wer 해시함수는 다시 비밀번호로 복호화가 불가능 하다  

   
</br>

### Hash 사용하기(sha512)

- **createHash(알고리즘) :** 사용할 해시 알고리즘을 넣어줍니다.
    - md5, sha1, sha256, sha512 등이 가능하지만, md5와 sha1은 이미 취약점이 발견되었습니다.
    - 현재는 sha512 정도로 충분하지만, 나중에 sha512마저도 취약해지면 더 강화된 알고리즘으로 바꿔야 합니다.
- **update(문자열) :** 변환할 문자열을 넣어줍니다.
- **digest(인코딩) :** 인코딩할 알고리즘을 넣어줍니다.
    - base64, hex, latin1이 주로 사용되는데, 그중 base64가 결과 문자열이 가장 짧아 애용됩니다. 결과물로 변환된 문자열을 반환합니다.
- Hash는 다시 비밀번호로 되돌릴수 없다 .
- digest(인코딩)를 서버에 저장하는 것이다.

---

- **Hash 예제**

    ```jsx
    const crypto = require('crypto');

    console.log('base64:', crypto.createHash('sha512').update('비밀번호').digest('base64'));
    console.log('hex:',crypto.createHash('sha512').update('비밀번호').digest('hex'));
    console.log('base64:', crypto.createHash('sha512').update('다른 비밀번호').digest('base64'));
    ```

 

---
</br>

### pbkdf2

- **컴퓨터의 발달로 기존 암호화 알고리즘이 위협받고 있습니다.**
    - sha512가 취약해지면 sha3으로 넘어가야된다.
    - 현재는 pbkdf2나, bcrypt, scrypt 알고리즘으로 비밀번호를 암호화 한다.
    - Node는 pbkdf2와 scrypt 지원합니다.

     

---

- **pbkdf2 예제**
    - **컴퓨터의 발달로 기존 암호화 알고리즘이 위협받는다,**
        - crypto.randomBytes로 64바이트 문자열 생성 → salt 역할
        - pbkdf2 인수로 순서대로 비밀번호, salt, 반복횟수, 출력 바이트, 알고리즘
        - 반복 회수를 조정해 암호화하는 데 1초 정도 걸리게 맞추는 것이 권장된다.
        - salt는 비밀번호 해독을 더 어렵게 하기위해 추가됨

    ```jsx
    const crypto = require('crypto');

    crypto.randomBytes(64, (err, buf)=>{
        const salt = buf.toString('base64');
        console.log('salt:',salt);
        crypto.pbkdf2('비밀번호', salt, 100000, 64, 'sha512', (err, key)=>{
            console.log('password:',key.toString('base64'));
        });
    });
    ```

  
---
</br>

### 양방향 암호화

- **대칭형 암호화(암호문 복호화 기능)**
    - key가 사용됨
    - 암호화할 때와 복호화 할 때 같은 Key를 사용해야 된다. (암호화 key <> 복호화 key)
    - iv는 초기화벡터 공격을 막기위해 createCipheriv가 생겨났다
    - node.js는 암호화 기본 배경 지식이 필요하다

---

- **양방향 메소드**
    - **crypto.createCipheriv(알고리즘, 키, iv):** 암호화 알고리즘과 키, 초기화벡터를 넣어줍니다.
        - 암호화 알고리즘은 aes-256-cbc를 사용했습니다. 다른 알고리즘을 사용해도 됩니다.
        - 사용 가능한 알고리즘 목록은 crypto.getCiphers()를 하면 볼 수 있습니다.
        - 키는 32바이트, 초기화벡터(iv)는 16바이트로 고정입니다.
    - **cipher.update(문자열, 인코딩, 출력 인코딩):** 암호화할 대상과 대상의 인코딩, 출력 결과물의 인코딩을 넣어줍니다.
        - 보통 문자열은 utf8 인코딩을, 암호는 base64를 많이 사용합니다.
    - **cipher.final(출력 인코딩):** 출력 결과물의 인코딩을 넣어주면 암호화가 완료됩니다.
    - **crypto.createDecipheriv(알고리즘, 키, iv):** 복호화할 때 사용합니다. 암호화할 때 사용했던 알고리즘과 키, iv를 그대로 넣어주어야 합니다.
    - **decipher.update(문자열, 인코딩, 출력 인코딩):** 암호화된 문장, 그 문장의 인코딩, 복호화할 인코딩을 넣어줍니다.
        - createCipher의 update()에서 utf8, base64 순으로 넣었다면 createDecipher의 update()에서는 base64, utf8 순으로 넣으면 됩니다.
    - **decipher.final(출력 인코딩): 복호화 결과물의 인코딩을 넣어줍니다.**

---

- **양방향 암호화 예제**

    ```jsx
    const crypto = require('crypto');

    const algorithm = 'aes-256-cbc';
    const key = 'abcdefghijklmnoopqrstubwxyz12345';
    const iv = '1234567890123456';

    const cipher = crypto.createCipheriv(algorithm, key, iv);
    let result = cipher.update('암호화할 문장','utf-8','base64');
    result += cipher.final('base64');
    console.log('암호화:', result);

    const decipher = crypto.createDecipheriv(algorithm, key, iv);
    let result2 = decipher.update(result, 'base64', 'utf8');
    result2 += decipher.final('utf8');
    console.log(`복호화 : ${result2}`);
    ```

   
---
</br>

### Util 모듈

- **각종 편의 기능을 모아둔 모듈**
    - deprecated와 promisify가 자주 쓰인다.
    - deprecated 감싸준 함수를 사용할 때 마다 경고가 뜬다

---

- **Util 메소드**
    - **util.deprecate: 함수가 deprecated 처리되었음을 알려줍니다.**
        - 첫 번째 인자로 넣은 함수를 사용했을 때 경고 메시지가 출력됩니다.
        - 두 번째 인자로 경고 메시지 내용을 넣으면 됩니다. 함수가 조만간 사라지거나 변경될 때 알려줄 수 있어 유용합니다.
    - **util.promisify: 콜백 패턴을 프로미스 패턴으로 바꿔줍니다.**
        - 바꿀 함수를 인자로 제공하면 됩니다. 이렇게 바꾸어두면 async/await 패턴까지 사용할 수 있어 좋습니다.

            (단, 콜백이 (err, data)형식으로 되어 있어야합니다.)

        - 3.5.5.1절의 randomBytes와 비교해보세요. 프로미스를 콜백으로 바꾸는 util.callbackify도 있지만 자주 사용되지는 않습니다.

   

---

- **Util 모듈 예제**

    ```jsx
    const util = require('util');
    const crypto = require('crypto');

    const dontUseMe = util.deprecate((x,y) =>{
        console.log(x+y);
    },'dontUseMe 함수는 deprecated되었으니 더 이상 사용하지 마세요.!');
    dontUseMe(1,2);

    const randomBytesPromise = util.promisify(crypto.randomBytes);
    randomBytesPromise(64)
        .then((buf)=>{
            console.log(buf.toString('base64'));
        })
        .catch((error) =>{
            console.error(error);
        });
    ```

    

    - 기존 코드를 삭제해야 될 경우에 다른 사용자가 사용 할 수도 있으니 바로 삭제하기보단 deprecated 띄워서 경고를 준 뒤에 시간이 지나고 사용자들이 안 쓴다 싶을때 버전을 올리면서 삭제 해준다.
    - 콜백함수를 util.promisify로 감싸주면 promise를 사용할 수 있다. then과 catch 사용 가능

---
</br>

### worker threads 모듈

- **node에서 멀티 스레드 방식으로 작업할 수 있게 하는 모듈  (멀티스레드 작업은 극히 드물다, 암호화나 압축을 직접 구현할 때 주로 사용 )**
    - isMainThread : 현재 코드가 메인 스레드에서 실행되는지, 워커 스레드에서 실행되는지 구분한다.
    - 메인 스레드에서는 new Worker를 통해 현재 파일(__filename)을 워커 스레드에서 실행시킨다.
    - worker.postMessage로 부모에서 워커로 데이터를 보낸다.
    - parentPort.on('message')로 부모로부터 데이터를 받고, postMessage로 데이터를 보낸다.

---

- **worker_threads 모듈 예제**

    ```jsx
    const {Worker, isMainThread, parentPort,} = require('worker_threads'); // 워커스레드 모듈 사용

    if(isMainThread){ // 부모일 때 분기 처리 // 메인스레드인 경우
        const worker = new Worker(__filename);
        worker.on('message', (value) => console.log('워커로 부터 ', value)); //워커스레드 한개 생성
        worker.on('exit', () => console.log('워커 끝' ));
        worker.postMessage('ping'); // 워커스레드한테 핑을 보낼 수 있다.
    }else{ // 워커스레드인 경우 else 처리 
        parentPort.on('message', (value) =>{ //부모로부터 메세지를 받아온다. value = ping
            console.log('부모로부터', value);
            parentPort.postMessage('pong'); // 
            parentPort.close(); // 워커스레드가 할 일이 끝나면 종료 
        });
    }
    ```

    

    - if (isMainThread)로 분기 처리
    - 처음에는 메인스레드가 실행이되서 메인스레드 안에서 워커스레드를 생성하고 워커스레드에 일을 분배하고 워커스레드들이 일을 마치면 다시 메인스레드로 보내서 메인스레드에서 워커스레드의 일들을 합쳐서 최종적인 결과물로 리턴하는 방식(직접 코딩을하여 만들어야함 )

---
</br>

### 여러 워커스레드 사용하기

- new Worker 호출하는 수만큼 워커 스레드가 생성된다.

---

- **여러 워커스레드 예제**

    ```jsx
    const {Worker, isMainThread, parentPort, workerData } = require('worker_threads');

    if(isMainThread){
        const threads = new Set(); // 중복되지 않는 배열 생성
     
        threads.add(new Worker(__filename,{ // 초기데이터  워커데이터 생성 
            workerData:{start:1},
        }));
        threads.add(new Worker(__filename,{
            workerData:{start:2},
        }));
        
        for(let worker of threads){ // 반복문 
            worker.on('message', message => console.log('워커로부터', message)); // 워커스레드 값 가져옴 
            worker.on('exit', () =>{ // 워커가 끝나면 
                threads.delete(worker);  // 워커 삭제 
                if(threads.size === 0){ // 0이되면 모든 워커들이 종료 일 마무리 
                    console.log('워커 끝'); // 
                }
            });
        } 
    }else { //워커스레드 
        const data = workerData; 
        parentPort.postMessage(data.start + 100); // 워커데이터에 100을 더한다 
    }
    ```

    
---

- **소수점 찾기 예제(싱글 스레드 일 때)**

    ```jsx
    const min = 2;
    const max = 10000000;

    const primes = []; // 소수가 담기는 곳 

    function generatePrimes(start, range) { // 에라토스테네스의 체 
        let isPrime = true;
        const end = start + range;
        for(let i = start; i< end; i++){
            for(let j = min; j < Math.sqrt(end); j++){
                if(i !== j && i % j === 0){
                    isPrime = false;
                    break;
            }
        }
        if(isPrime){
            primes.push(i);
        }
        isPrime = true;
        }
    }

    console.time('prime'); // 시간측정
    generatePrimes(min, max); // 2부터 천만
    console.timeEnd('prime'); // 소수가 몇개인지 
    console.log(primes.length); //   
    ```

   

- **소수점 찾기 예제(워커 스레드 일 때)**

    ```jsx
    const {Worker, isMainThread, parentPort, WorkerData, workerData} = require('worker_threads');

    const min = 2;

    let primes = []; // 배열 저장할 곳

    function findPrimes(start, range){
        let isPrime = true;
        let end = start + range;
        for(let i = start; i<end; i++){
            for(let j= min; j<Math.sqrt(end); j++){
                if(i!==j && i % j === 0) {
                    isPrime = false;
                    break;
                }
            }
            if(isPrime){
                primes.push(i);
            }
            isPrime = true;
        }
    }
    if(isMainThread) {
        const max = 10000000;
        const threadCount = 8; // 8개로 나눠서 조사
        const threads = new Set(); // 
        const range = Math.ceil((max -min) / threadCount);
        let start = min;
        console.time('prime');
        for(let i = 0; i<threadCount-1; i++){
            const wStart = start;
            threads.add(new Worker(__filename, {workerData:{start: wStart, range}})); // 스레드 생성 
            start += range;
        }
    //워커데이터 받아옴
        threads.add(new Worker(__filename,{workerData: {start,range:range+((max-min +1)% threadCount)}}));
        for(let worker of threads){
            worker.on('error',(err)=>{ // 워커에서 에러
                throw err;
            });
            worker.on('exit', () =>{
                threads.delete(worker);
                if (threads.size ===0){
                    console.timeEnd('prime');
                    console.log(primes.length);
                }
            });
            worker.on('message', (msg) =>{
                primes = primes.concat(msg); // 8개의 결과를 합쳐줌 
            })
        }
    }else{
        findPrimes(workerData.start, workerData.range);
        parentPort.postMessage(primes);
    }
    ```

    
---
</br>

### child process 모듈

- 노드에서 다른 프로그램을 실행하고 싶거나 명령어를 수행하고 싶을 때 사용한다.
    - 현재 노드 프로세스 외에 새로운 프로세스를 띄워서 명령을 수행한다.
    - 명령 프롬프트의 명령어인 dir을 노드를 통해 실행(리눅스라면 ls를 대신 적을 것)

---

- **child_process 모듈 예제**

    ```jsx
    const exec = require('child_process').exec;

    let process = exec('dir');

    process.stdout.on('data',function(data){
        console.log(data.toString(),);
    });

    process.stderr.on('data',function(data){
        console.error(data.toString());
    });
    ```

    - 한글화가 안될경우 chcp 65001>nul && dir 입력
    - 해당 폴더조회를 node에서도 할 수 있다.

       

---

- **파이썬 파일 호출 예제**

    ```jsx
    const spawn = require('child_process').spawn;

    const process = spawn('python',['test.py']);

    process.stdout.on('data',function(data){
        console.log(data.toString());
    });
    process.stderr.on('data',function(data){
        console.error(data.toString());
    });
    ```

---