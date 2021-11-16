import { ExtractPropTypes } from "@vue/runtime-core";

export const PropsConfig = {
  modelValue: {
    type: Number,
    requie: false,
    default: 0,
  },
  range: {
    type: Number,
    requie: false,
    default: 5
  },
  theme:{
    type: String,
    requie: false,
    default: 'orange'
  }
}

export type PropType = ExtractPropTypes<typeof PropsConfig>;