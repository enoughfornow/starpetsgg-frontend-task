<script setup lang="ts">
import { useCurrencyStore } from "features/currency-rate";
import { VCurrency } from "entities/currency";
import { computed, onMounted } from "vue";
import { types } from "entities/currency";
import useCurrencyRate from '@/composables/useCurrencyRate';

const currencyStore = useCurrencyStore();

const currencyList = computed(() => currencyStore.currencyList);

const currencyRateList = computed<types.ICurrencyList>(
  () => useCurrencyRate(currencyList.value, currencyStore.selectedCurrency));



function valueToFixed(value: number): string {
  return value ? value.toFixed(2) : "0";
}

onMounted(async () => {
  await currencyStore.getCurrencyList();
})
</script>

<template>
  <div v-if="currencyList">
    <div 
      v-for="(value, key) in currencyRateList" 
      :key="value">
      <VCurrency
        :value="valueToFixed(value)"
        :currency="key + ''"
        :selected-currency="currencyStore.selectedCurrency"
      />
    </div>
  </div>
</template>