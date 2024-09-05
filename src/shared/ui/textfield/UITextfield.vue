<script lang ="ts" setup>
import { UILabel } from '@/ui';
import { useVModel } from '@vueuse/core';
import { InputTypeHTMLAttribute } from 'vue';

import useFormattedValue from '@/composables/useFormattedValue';

interface IEmits {
  (e: 'update:modelValue', number: number): void
  (e: 'target', boolean: boolean): void
}
interface IProps {
  label?: string
  modelValue?: number 
  type?: InputTypeHTMLAttribute
  placeholder?: string
}

const emit = defineEmits<IEmits>();
const props = defineProps<IProps>()

const classes = {
  label: 'font-montserrat font-size-10 el-w-content color-gray',
  textfield: [
    'el-h-md el-w-content p-2',
    'bg-color-gray cursor-pointer',
    'appearance-none decoration-none',
    'border-1 rounded-5',
    'font-montserrat font-size-20',
  ]
};
const value = useVModel(props, 'modelValue', emit);

const formattedValue = useFormattedValue(value)

</script>

<template>
  <UILabel
    :class="classes.label"
    :text="label"
  >
    <input
      v-model="formattedValue"
      :class="classes.textfield"
      :placeholder="placeholder"        
      :type="type"
    />
  </UILabel>
</template>

