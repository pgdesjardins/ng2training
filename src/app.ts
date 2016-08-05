import a from './modules/a';
import b from './modules/b';

import './app.scss';

class App {
  constructor(private value: Number) {
    /* tslint:disable */
    console.log(a());
    console.log(b());
    console.log(value);
    /* tslint:enable */
  }
}

export default new App(1);
