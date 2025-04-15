const sayHi = require('./app');

if (sayHi('DevOps') !== 'Hi, DevOps!') {
    console.error('[X] Test failed');
    process.exit(1);
}

console.log('[!] Test passed');