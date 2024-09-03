<script setup lang="ts">
import { useRouter } from 'vue-router'
import { UIButton, UISelect, UIIconTypes } from '@/ui'
import { useCurrencyStore } from 'features/currency-converter'
import { computed } from 'vue';


const classes = {
    root: 'flex items-center justify-around gap-10 bg-color-black color-gray h-100',
}

const router = useRouter()

const currencyStore = useCurrencyStore()

const currencies = computed(() => currencyStore.currencies)



function goToHome (text: string) {
  text === 'Главная' ? router.push({ path: '/' }) : router.push({ path: '/convert' })
}


// обновление состояния стора при выборе валюты
function selectСurrency(text: UIIconTypes.EIconTypes) {
  currencyStore.selectCurrency(text)
  if (currencyStore.selectedCurrency) {
   currencyStore.getCurrencyList()
  currencyStore.filterCurrency()
 }
}

</script>

<template>
  <header :class="classes.root">
   <div class="el-w-content flex gap-15">
     <UIButton
     @click="goToHome('Главная')">
      <p >Главная</p>
    </UIButton>
    <UIButton
     @click="goToHome('Конвертация')"
     >
     <p >Конвертация</p>
    </UIButton>
   </div>

    <UISelect 
    @update:modelValue="selectСurrency($event)"
    :selected="currencyStore.selectedCurrency"
    :currencies="currencies"
    />
  </header>
</template>

