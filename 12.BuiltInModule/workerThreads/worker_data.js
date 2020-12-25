const {Worker, isMainThread, parentPort, workerData } = require('worker_threads');

if(isMainThread){
    const threads = new Set(); // 중복되지 않는 배열 생성
 
    threads.add(new Worker(__filename,{ // 초기데이터  워커 스레드 생성 
        workerData:{start:1},
    }));
    threads.add(new Worker(__filename,{
        workerData:{start:2},
    }));
    
    for(let worker of threads){ // 반복문 
        worker.on('message', message => console.log('워커로부터', message));
        worker.on('exit', () =>{ // 워커가 끝나면 
            threads.delete(worker);  // 워커 삭제 
            if(threads.size === 0){ // 0이되면 모든 워커들이 종료 일 마무리 
                console.log('워커 끝'); // 
            }
        });
    } 
}else {
    const data = workerData;
    parentPort.postMessage(data.start + 100);
}