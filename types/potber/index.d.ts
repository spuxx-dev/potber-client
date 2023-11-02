// import Ember from 'ember';
import 'ember-source/types';
import 'ember-source/types/preview';

declare global {
  // // Prevents ESLint from "fixing" this via its auto-fix to turn it into a type
  // // alias (e.g. after running any Ember CLI generator)
  // // eslint-disable-next-line @typescript-eslint/no-empty-interface
  // interface Array<T> extends Ember.ArrayPrototypeExtensions<T> {}
  // // interface Function extends Ember.FunctionPrototypeExtensions {}

  type ControlSize =
    | 'square'
    | 'small'
    | 'medium'
    | 'large'
    | 'x-large'
    | 'max';
  type ControlVariant = 'primary' | 'primary-transparent' | 'secondary';
  type ModalVariant = 'default' | 'success' | 'warning' | 'error';

  interface ContentParserMock {
    input: string;
    expected: string;
  }

  type IconSize = 'auto' | 'large' | 'medium';
}

export {};
