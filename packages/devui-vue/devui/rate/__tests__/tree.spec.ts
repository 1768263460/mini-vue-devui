import { mount } from '@vue/test-utils'
import { ref } from 'vue'
import Rate from '../src/rate'

describe('tree', () => {
  it('should render correctly', () => {
    const wrapper = mount({
      components: { Rate },
      template: `
        <Rate v-model="score" :range="range"></Rate>
      `,
      setup() {
        const score = ref(3);
        const range = ref(5);

        return {
          score,
          range
        }
      }
    })

    expect(wrapper.classes()).toContain('rate')
  })
})