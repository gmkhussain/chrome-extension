// popup.js
import { sayHello } from './external.js';

document.addEventListener('DOMContentLoaded', function() {
    const button = document.getElementById('helloButton');
    
    button.addEventListener('click', function() {
        sayHello();
    });
});
