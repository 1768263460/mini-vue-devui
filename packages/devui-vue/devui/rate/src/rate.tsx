import { defineComponent, SetupContext, ExtractPropTypes } from "@vue/runtime-core";
import { PropType, PropsConfig } from './rate-type';
import useRange from './hooks'
import "./rate.scss";

const rate = defineComponent({
  name: 'd-rate',
  emits: ['update:modelValue'],
  props: PropsConfig,
  setup(props: PropType, context: SetupContext) {
    const {
      modelValue,
      range,
      empty,
      fillWidth,
      theme,
      mouseout,
      mouseover,
      updateValue
    } = useRange(props, context);

    return () => (
      <div class="rate" onMouseout={mouseout}>
        {/* 空心 */}
        <span class={`empty-box ${theme.value}`}>
          {
            new Array(Math.floor(range.value)).fill(empty.value).map((emp, index) => <span class="empty" onClick={updateValue.bind(null, index)} onMouseover={mouseover.bind(null, index)}>☆</span>)
          }
        </span>
        {/* 填充 */}
        <span class={`fill-box ${theme.value}`} style={fillWidth.value}>
          {
            new Array(Math.ceil(range.value)).fill(modelValue.value).map((fill, index) => <span class="fill" onClick={updateValue.bind(null, index)} onMouseover={mouseover.bind(null, index)}>★</span>)
          }
        </span>
      </div>
    )
  }
});

export default rate;