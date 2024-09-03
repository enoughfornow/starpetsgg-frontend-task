<script lang ="ts" setup>
import { UILabel } from '@/ui';

interface IEmits {
  (e: 'update:modelValue', text: string): void
}
interface IProps {
  label?: string
  modelValue?: string
  type?: number
}

const emit = defineEmits<IEmits>();
const props = withDefaults(defineProps<IProps>(), {
  modelValue: '',
  label: '',
  type: 0,
});

const classes = {
  textfield: 'bc-gray-3 el-h-md bg-color-primary-1',
};
const value = useVModel(props, 'modelValue', emit);
</script>

<template>
  <UILabel
    v-if="label"
    :text="label"
  >
    <input
      v-model="value"
      :class="classes.textfield"
      :type="type"
    >
  </UILabel>

  <input
    v-else
    v-model="value"
    :class="classes.textfield"
  >
</template>