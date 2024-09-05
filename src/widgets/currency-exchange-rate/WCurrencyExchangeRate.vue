<script setup lang="ts">
import { FCurrencyRate } from 'features/currency-rate'



const classes = {
    root: 'border-1 rounded-5 el-w-content',
}



</script>

<template>
   <div :class="classes.root">
    <FCurrencyRate />
   </div>
</template>