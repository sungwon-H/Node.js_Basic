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