<script setup lang="ts">
interface IProps {
  for?: string
  text?: string
}

const props = defineProps<IProps>();
</script>

<template>
  <label :for="props.for">
    {{ text }}
    <slot />
  </label>
</template>