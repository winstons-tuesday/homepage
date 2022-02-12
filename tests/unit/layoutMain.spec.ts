import { shallowMount } from '@vue/test-utils'
import LayoutMain from '@/components/LayoutMain.vue'

describe('LayoutMain.vue', () => {
  it('renders without error', () => {
    const msg = 'new message'
    const wrapper = shallowMount(LayoutMain);
    expect(wrapper).toBeTruthy();
  })
})
