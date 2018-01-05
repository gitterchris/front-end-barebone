import { join } from 'lodash';

const el = dummyComponent();
document.body.appendChild(el);

function dummyComponent() {
  const element = document.createElement('div');
  element.innerHTML = join([ 'Hello', 'webpack' ], ' ');

  const [ first, ...rest ] = [ 1, 2, 3 ];

  const btn = document.createElement('button');
  btn.innerHTML = `Not working button - ${first} - ${rest}`;

  element.appendChild(btn);

  return element;
}
