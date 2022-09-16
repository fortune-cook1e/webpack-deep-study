import { add } from './a';

const a = 10,
  b = 20;

const result = add(a, b);

const rootElement = document.getElementById('app');
const btnElement = document.createElement('button');
btnElement.id = 'btn';
btnElement.textContent = 'this is a button';
rootElement.appendChild(btnElement);

const btn = document.getElementById('btn');
btn.onclick = function () {
  import('./b').then(res => {
    res.addDouble(a, b);
  });
};
