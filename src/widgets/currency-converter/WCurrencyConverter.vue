<script setup lang="ts">
import { FCurrencyConverter } from 'features/currency-converter'

const classes = {
    root: 'border-1 rounded-5 el-w-content',
}

</script>

<template>
  <div :class="classes.root">
    <FCurrencyConverter />
  </div>
</template>