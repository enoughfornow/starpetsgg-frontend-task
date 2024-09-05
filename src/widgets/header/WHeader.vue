<script setup lang="ts">
import { useRoute, useRouter } from 'vue-router'
import {
  UIButton,
  UISelect,
  UISelectTypes
} from '@/ui'
import { useCurrencyRateStore } from 'features/currency-rate'
import { computed, onMounted, ref } from 'vue';


const classes = {
  root: 'flex items-center justify-around gap-10 bg-color-black color-gray h-100',
  container: 'el-w-content flex gap-15',
  selected: 'border-bottom-1 border-color-gray'
}

const router = useRouter()
const route = useRoute()

const currencyRateStore = useCurrencyRateStore()



const selectedOption = ref(true)


const selectOption = computed(() => selectedOption.value = route.path === '/' ? true : false)

const currencyList = computed(() => currencyRateStore.currencyList)




function selectPage(text: string) {
  const path = text === 'Главная' ? '/' : '/convert';
  if (router.resolve(path).name !== 'PNotFound') {
    router.push({ path });
  }
}

// обновление состояния стора при выборе валюты
function selectСurrency(text: UISelectTypes.ESelectTypes) {
  currencyRateStore.selectCurrency(text)
  if (currencyRateStore.selectedCurrency) {
   currencyRateStore.getCurrencyList()
 }
}

onMounted(async () => {
  await currencyRateStore.getCurrencyList()
})

</script>

<template>
  <header :class="classes.root">
   <div :class="classes.container">
     <UIButton
        @click="selectPage('Главная')">
          <p
            :class="selectOption ? classes.selected : ''">
            Главная
        </p>
      </UIButton>
      <UIButton
        @click="selectPage('Конвертация')"
      >
          <p
            :class="!selectOption ? classes.selected : ''">
            Конвертация
        </p>
      </UIButton>
   </div>

    <UISelect 
        v-if="currencyList"
        @update:modelValue="selectСurrency($event)"
        :model-value="currencyRateStore.selectedCurrency"
    />
  </header>
</template>

