import { expect, it } from 'vitest';
import { add } from './main';

it('2 + 2 = 4', () => {
  expect(add(2, 2)).toBe(4);
});
