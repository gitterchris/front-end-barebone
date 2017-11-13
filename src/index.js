import { join } from 'lodash';

document.body.appendChild(dummyComponent());

function dummyComponent() {
  const element = document.createElement('div');
  element.innerHTML = join(['Hello', 'webpack'], ' ');
  return element;
}
