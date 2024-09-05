<script setup lang="ts">
interface IProps {
  for?: string
  text?: string
}

const props = defineProps<IProps>();

const classes = {
  label: 'el-w-content',
  text: 'font-montserrat font-size-15 text-color-gray'
}
</script>

<template>
  <label 
    :for="props.for"
    :class="classes.label"
    >
    <p
      :class="classes.text"
    >
      {{ text }}
    </p>
    <slot />
  </label>
</template>