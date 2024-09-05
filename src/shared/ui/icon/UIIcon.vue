<script setup lang="ts">
import { computed } from 'vue';
import { UISelectTypes } from '@/ui';
import {
  eur,
  rub,
  usd
} from '../../images/icons';


interface IProps {
  name: UISelectTypes.ESelectTypes
}

const props = defineProps<IProps>()
 
const classes = {
  container: 'flex items-center gap-3 el-w-content',
  icon: [
    'el-w-10 el-h-10 bg-color-gray',
  ],
};

const icon = computed(() =>
  props.name === 'eur'
    ? eur
    : props.name === 'rub'
      ? rub
      : usd)

</script>


<template>
  <div :class="classes.container">
    <img 
    :src="icon"
    :class="classes.icon" />
      <slot/>
  </div>
</template>

