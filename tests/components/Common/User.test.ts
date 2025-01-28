import { describe, expect, test, vi } from 'vitest';
import { mount } from '@vue/test-utils';
import CommonUser from '~/components/Common/User.vue';

global.fetch = vi.fn(() => {
  return Promise.resolve({
    json: () => Promise.resolve({ name: 'Sanjar' }),
  });
});

describe('Testing User component', () => {
  test('Is component mounted', () => {
    const component = mount(CommonUser);
    expect(component).toBeTruthy();
  });

  test('Moking API request', async () => {
    const component = mount(CommonUser);
    const button = component.find('button');

    await button.trigger('click');

    await component.vm.$nextTick();

    const paragraphContent = component.find('p').text();
    expect(paragraphContent).toBe('Sanjar');
  });
});
