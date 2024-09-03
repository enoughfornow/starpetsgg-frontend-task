<script setup lang="ts">
import { UIIconTypes, UIIcon } from '@/ui';

interface IProps {
  selected: UIIconTypes.EIconTypes | null;
  currencies: UIIconTypes.EIconTypes[];
}
interface IEmits {
  (e: 'update:modelValue', value: UIIconTypes.EIconTypes): void
}


const props = defineProps<IProps>();
const emit = defineEmits<IEmits>();



const classes = {
  container: [
    'flex gap-3 el-w-content '
  ],
 select: [
   'decoration-none appearance-none cursor-pointer border-none',
    'bg-color-black color-gray', 
    'el-h-md el-w-20',
    'text-center'
  ],

}


function  handleSelectChange (event) {
  emit('update:modelValue', event.target.value);
};


</script>

<template>
 <div :class="classes.container">
  <select 
  :class="classes.select"
  @change="handleSelectChange"
  >
    <option 
      v-for="(currency, index) in currencies" 
      :key="index" 
      :value="currency"
    >
      {{ currency.toUpperCase() }}
    </option>
  </select>
   <UIIcon
        :key="selected"
        :name="selected"
    />
 </div>
</template>