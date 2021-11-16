import { SetupContext } from "@vue/runtime-core";
import { computed, ref, toRef } from "vue";
import { PropType } from '../rate-type';

export default function useRange(props: PropType, context: SetupContext) {
  let modelValue = toRef(props, 'modelValue');
  let range = toRef(props, 'range');
  let theme = toRef(props, 'theme');

  // 判断越界
  if(modelValue.value > range.value){
    modelValue.value = range.value;
  }

  const fillCount = ref(modelValue.value);

  let empty = computed(() => {
    return Number((range.value - modelValue.value).toFixed(1));
  });

  let fillWidth: any = computed(() => {
    return { width: fillCount.value * 41 + 'px' };
  });

  const mouseover = (currIndex: number, e: MouseEvent) => {
    e.stopPropagation();
    fillCount.value = currIndex + 1;
  }

  const mouseout = () => {
    fillCount.value = modelValue.value;
  }

  const updateValue = (index, e: Event) => {
    e.stopPropagation();
    context.emit('update:modelValue', index + 1);
  }

  return {
    modelValue,
    range,
    empty,
    fillWidth,
    theme,
    mouseover,
    mouseout, 
    updateValue
  }
}
