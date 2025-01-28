import { describe, expect, test, vi } from 'vitest';
import { mount } from '@vue/test-utils';
import HomeParent from '~/components/Home/Parent.vue';
import HomeChild from '~/components/Home/Child.vue';

describe('Testing Parent component', () => {
  test('Is component mounted', () => {
    const component = mount(HomeParent);
    expect(component).toBeTruthy();
  });

  test('Child emit event', async () => {
    const component = mount(HomeParent);
    const childComponent = component.findComponent(HomeChild);

    childComponent.vm.$emit('update', 'Hi Dad!');

    await component.vm.$nextTick();

    const paragraphText = component.find('p').text();

    expect(paragraphText).toBe('Hi Dad!');
  });
});
