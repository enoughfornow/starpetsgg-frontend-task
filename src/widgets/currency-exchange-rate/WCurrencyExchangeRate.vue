<script setup lang="ts">
import { UIIcon } from '@/ui'
import { useCurrencyStore } from 'features/currency-converter';
import FCurrencyRate from 'features/currency-rate'
import { computed } from 'vue';


const classes = {
    root: 'w-500 h-500 border-2 rounded-5 ',
}

const currencyStore = useCurrencyStore()

const currencies = computed(() => currencyStore.currencies)

</script>

<template>
   <div :class="classes.root">
    <FCurrencyRate/>
   </div>
</template>