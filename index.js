import { foo as _foo3 } from './bar'

function a() {
  return {..._foo3()};
}

export default a;
