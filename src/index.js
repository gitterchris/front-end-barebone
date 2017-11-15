import { join } from 'lodash';
import printMe from './print';

function dummyComponent() {
  const element = document.createElement('div');
  element.innerHTML = join(['Hello', 'webpack'], ' ');

  var btn = document.createElement('button');
  btn.innerHTML = 'Click me and check the console!';
  btn.onclick = printMe;

  element.appendChild(btn);

  return element;
}

let element = dummyComponent();
document.body.appendChild(element);

if (module.hot) {
  module.hot.accept('./print.js', function() {
    console.log('Accepting the updated printMe module!!!!!!!!!');
    
    document.body.removeChild(element);
    element = dummyComponent();
    document.body.appendChild(element)

  });
}
