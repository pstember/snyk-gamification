import { shallowMount } from '@vue/test-utils';
import DashboardOpenSource from '@/components/openSourceDep/DashboardOpenSource.vue';

describe('DashboardOpenSource.vue', () => {
  it('renders props.msg when passed', () => {
    const msg = 'new message';
    const wrapper = shallowMount(DashboardOpenSource, {
      propsData: { msg },
    });
    expect(wrapper.text()).toMatch(msg);
  });
});
