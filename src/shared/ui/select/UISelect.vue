<script setup>
import { ref } from 'vue'

const options = [
  { value: 'option1', label: 'Вариант 1' },
  { value: 'option2', label: 'Вариант 2' },
  { value: 'option3', label: 'Вариант 3' },
]

const selected = ref('')
</script>


<template>
  <select v-model="selected">
    <option v-for="option in options" :key="option.value" :value="option.value">
      {{ option.label }}
    </option>
  </select>
</template>

