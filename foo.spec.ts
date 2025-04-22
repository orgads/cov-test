import { Foo } from './foo.js';

it('test', () => {
  const foo = new Foo();
  expect(foo.bar).toBeUndefined();
});
