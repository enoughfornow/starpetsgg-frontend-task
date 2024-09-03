<script setup lang="ts">
import { useCurrencyStore } from "features/currency-converter";
import { keys, VCurrency } from 'entities/currency'
import { UIIcon, UIIconTypes } from '@/ui'
import { reactive, ref, watch } from "vue";
import { computed } from "vue";


const currencyStore = useCurrencyStore()

currencyStore.getCurrencyList()

const currencyList = computed(() => currencyStore.currencyList)

currencyStore.filterCurrency()

const filteredList = computed(() => currencyStore.filteredList)


</script>

<template>
       <div v-for="currency in filteredList" :key="currency">
          {{ currency }}
       </div>
</template> 