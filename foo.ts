import { MyDecorator } from './decorator.js';

export class Foo {
  @MyDecorator()
  bar?: string;
}
