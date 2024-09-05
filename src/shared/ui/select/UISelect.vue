<script setup lang="ts">
import { UISelectTypes } from '@/ui';
import { useVModel } from '@vueuse/core';

interface IProps {
  modelValue?: UISelectTypes.ESelectTypes
}
interface IEmits {
  (e: 'update:modelValue', value: UISelectTypes.ESelectTypes): void
}


const props = defineProps<IProps>();
const emit = defineEmits<IEmits>();



const classes = {
  container: [
    'flex gap-3 el-w-content'
  ],
 select: [
   'font-montserrat font-bold decoration-none cursor-pointer',
    'bg-color-black color-gray border-none rounded-3', 
    'w-60 h-50',
   'text-center',
  'bg-[url(src/shared/images/icons/sm/arrow.svg)] bg-no-repeat bg-right',
  ],
  option: 'font-montserrat font-bold'

}

const value = useVModel(props, 'modelValue', emit);



</script>

<template>
 <div :class="classes.container">
  <select 
    :class="classes.select"
    v-model="value"
  >
    <option 
      v-for="(item, index) in UISelectTypes.ESelectTypes" 
      :key="index" 
      :value="item"
      :class="classes.option"
    >
      {{ item.toUpperCase() }}
    </option>
  </select>
   <slot name="icon"/>
 </div>
</template>