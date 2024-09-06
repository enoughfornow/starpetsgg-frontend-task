<script setup lang="ts">
import { useRoute, useRouter } from 'vue-router'
import {
  UIButton,
  UISelect,
  UISelectTypes
} from '@/ui'
import { useCurrencyStore } from 'features/currency-rate'
import { computed, onMounted, ref } from 'vue';


const classes = {
  root: 'flex items-center justify-around gap-10 bg-color-black color-gray h-100',
  container: 'el-w-content flex gap-15',
  selected: 'border-bottom-1 border-color-gray'
}

const router = useRouter()
const route = useRoute()

const currencyStore = useCurrencyStore()



const selectedOption = ref(true)


const selectOption = computed(() => selectedOption.value = route.path === '/' ? true : false)

const currencyList = computed(() => currencyStore.currencyList)




function selectPage(text: string) {
  const path = text === 'Главная' ? '/' : '/convert';
  if (router.resolve(path).name !== 'PNotFound') {
    router.push({ path });
  }
}

// обновление состояния стора при выборе валюты
function selectСurrency(text: UISelectTypes.ESelectTypes) {
  currencyStore.selectCurrency(text)
  if (currencyStore.selectedCurrency) {
   currencyStore.getCurrencyList()
 }
}

onMounted(async () => {
  await currencyStore.getCurrencyList()
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
        :model-value="currencyStore.selectedCurrency"
    />
  </header>
</template>

