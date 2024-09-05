<script setup lang="ts">
import { useCurrencyRateStore } from "features/currency-rate";
import { VCurrency } from "entities/currency";
import { computed, onMounted } from "vue";

const currencyStore = useCurrencyRateStore();

const currencyList = computed(() => currencyStore.currencyList);

const currencyRateList = computed(() => currencyList.value[currencyStore.selectedCurrency]);

function valueToFixed(value: number): string {
  return value ? value.toFixed(2) : "0";
}

function getSelectedCurrency(key: string): string {
  return currencyStore.selectedCurrency !== key ? key.toUpperCase() : "";
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
        :currency="getSelectedCurrency(key + '')"
        :selected-currency="currencyStore.selectedCurrency"
      />
    </div>
  </div>
</template>
