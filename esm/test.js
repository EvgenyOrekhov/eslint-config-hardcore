function foo({ bar }) {
  return { bar };
}

foo({ bar: 123 });

// eslint-disable-next-line import/no-unused-modules, import/no-anonymous-default-export
export default "test";
