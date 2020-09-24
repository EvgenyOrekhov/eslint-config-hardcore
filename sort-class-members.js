/* eslint-disable
  fp/no-class,
  @typescript-eslint/no-empty-function,
  @typescript-eslint/no-useless-constructor,
  class-methods-use-this,
  @typescript-eslint/no-unused-vars,
  @typescript-eslint/naming-convention,
  no-underscore-dangle,
  getter-return,
  accessor-pairs,
  no-undef
*/

"use strict";

class Foo {
  static staticProperty;

  static staticArrowFunctionProperty = () => {};

  static staticMethod() {}

  static async staticAsyncMethod() {}

  static get staticAccessorPair() {}

  static set staticAccessorPair(value) {}

  static get getter() {}

  static set setter(value) {}

  @decorator decoratedProperty = "bar";

  property = "bar";

  arrowFunctionProperty = () => {};

  static _conventionalStaticPrivateProperty;

  _conventionalPrivateProperty;

  constructor() {}

  get accessorPair() {}

  set accessorPair(value) {}

  get getter() {}

  set setter(value) {}

  @decorator
  decoratedMethod() {}

  method() {}

  @decorator
  async asyncDecoratedMethod() {}

  async asyncMethod() {}

  _conventionalPrivateMethod() {}

  async _asyncConventionalPrivateMethod() {}
}
