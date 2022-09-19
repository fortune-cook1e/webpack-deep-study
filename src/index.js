import { add } from './a';

const a = 10,
  b = 20;

const rootElement = document.getElementById('app');
const btnElement = document.createElement('button');
btnElement.id = 'btn';
btnElement.textContent = 'this is a button';
rootElement.appendChild(btnElement);

const btn = document.getElementById('btn');
btn.onclick = function () {
  import('./b').then(res => {
    const result = res.addDouble(a, b);
    btnElement.textContent = result;
  });
};
