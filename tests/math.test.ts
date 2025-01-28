import { describe, expect, test } from 'vitest';
import { sum } from '~/utils';

describe('Testing funciton', () => {
  test('Testing sum', () => {
    expect(sum(1, 2)).toBe(3);
  });
});
