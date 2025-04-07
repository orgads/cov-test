if (typeof describe === 'undefined') {
  const { describe, expect, it } = await import('vitest');
  //@ts-ignore
  global.describe = describe;
  //@ts-ignore
  global.expect = expect;
  //@ts-ignore
  global.it = it;
}
import { Foo, Bar } from './classes.js';

describe('classes', () => {
  it('foo', () => {
    const foo = new Foo();
    expect(foo.foo).toBe(1);
  });
  it('bar', () => {
    const bar = new Bar();
    expect(bar.bar).toBe(2);
  });
});
