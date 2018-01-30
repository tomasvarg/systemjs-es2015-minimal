import { showMessage } from './src/utils';

console.log('Hello from es5!');
setTimeout(() => {
    console.log('Hello from es6!');
    showMessage('Hello from es6!', '#whatever-app');
}, 0);
