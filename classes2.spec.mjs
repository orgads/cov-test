if (typeof describe === 'undefined') {
  const { describe, expect, it } = await import('vitest');
  //@ts-ignore
  global.describe = describe;
  //@ts-ignore
  global.expect = expect;
  //@ts-ignore
  global.it = it;
}
import { Foo2, Bar2 } from './classes2.mjs';

describe('classes2', () => {
  it('foo', () => {
    const foo = new Foo2();
    expect(foo.foo).toBe(1);
  });
  it('bar', () => {
    const bar = new Bar2();
    expect(bar.bar).toBe(2);
  });
});
