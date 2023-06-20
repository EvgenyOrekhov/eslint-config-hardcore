/* eslint-disable
  fp/no-class,
  no-empty-function,
  no-useless-constructor,
  @typescript-eslint/naming-convention,
  no-underscore-dangle,
  getter-return,
  accessor-pairs,
  no-undef,
  sonar/no-accessor-field-mismatch,
*/

// eslint-disable-next-line import/no-unused-modules
export default class Example {
  static staticProperty;

  static staticArrowFunctionProperty = () => {};

  static get staticAccessorPair() {}

  static set staticAccessorPair(value) {}

  static get staticGetter() {}

  static set staticSetter(value) {}

  static staticMethod() {}

  static async staticAsyncMethod() {}

  @decorator decoratedProperty = "bar";

  property = "bar";

  arrowFunctionProperty = () => {};

  constructor() {}

  get accessorPair() {}

  set accessorPair(value) {}

  get getter() {}

  set setter(value) {}

  @decorator
  decoratedMethod() {}

  method() {}

  @decorator
  async decoratedAsyncMethod() {}

  async asyncMethod() {}

  static _staticConventionalPrivateProperty;

  static _staticConventionalPrivateMethod() {}

  static async _staticAsyncConventionalPrivateMethod() {}

  _conventionalPrivateProperty;

  _conventionalPrivateMethod() {}

  async _asyncConventionalPrivateMethod() {}
}
