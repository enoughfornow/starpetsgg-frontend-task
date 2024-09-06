<script setup lang="ts">
import {
  computed,
  onMounted,
  ref
} from 'vue'
import {
  UISelect,
  UITextfield,
  UISelectTypes,
  UIIcon,
UIButton
} from '@/ui'
import { useCurrencyStore } from 'features/currency-rate'

const classes = {
  root: 'flex flex-col el-w-content items-center justify-center gap-5 p-2',
  container: 'flex gap-5',
  button: 'cursor-pointer mr-12 m-auto',
}

const currencyStore = useCurrencyStore()

const currencyList = computed(() => currencyStore.currencyList)

const selectedFirstCurrency = ref<UISelectTypes.ESelectTypes>(UISelectTypes.ESelectTypes.usd)
const selectedSecondCurrency = ref<UISelectTypes.ESelectTypes>(UISelectTypes.ESelectTypes.rub)
const inputFirstValue = ref(0)

const inputSecondValue = computed<number>({
  get(): number {
    if (
      inputFirstValue.value !== null &&
      selectedFirstCurrency.value &&
      selectedSecondCurrency.value
    ) {
      if (selectedFirstCurrency.value === selectedSecondCurrency.value) {
        return inputFirstValue.value
      }
      const pair = `${selectedFirstCurrency.value}-${selectedSecondCurrency.value}`
      const rate = currencyList.value?.[pair]
      return inputFirstValue.value * rate
    }
    return 0
  },
  set(newValue: number): void {
    if (selectedFirstCurrency.value && selectedSecondCurrency.value) {
      if (selectedFirstCurrency.value === selectedSecondCurrency.value) {
        inputFirstValue.value = newValue;
      } else {
        const pair = `${selectedFirstCurrency.value}-${selectedSecondCurrency.value}`
        const rate = currencyList.value?.[pair]
        inputFirstValue.value = newValue / rate;
      }
    }
  }
})

function clearInputs() {
  inputFirstValue.value = 0
}

onMounted(async () => {
  await currencyStore.getCurrencyList()
})
</script>

<template>
  <form :class="classes.root">
    <div :class="classes.container">
       <UITextfield 
          v-model="inputFirstValue"
          type="number" 
          placeholder="введите сумму"
       />
    <UISelect 
      v-model="selectedFirstCurrency">
      <template #icon>
        <UIIcon 
        :name="selectedFirstCurrency" />
      </template>
    </UISelect>
    </div>
    <UIButton
      :disabled="inputFirstValue === 0"
      :class="classes.button"
       @click="clearInputs">
      сброс
    </UIButton>
    <div :class="classes.container">
        <UITextfield 
          v-model="inputSecondValue" 
          type="number"
          placeholder="введите сумму"
       />
    <UISelect 
      v-model="selectedSecondCurrency">
      <template #icon>
        <UIIcon 
        :name="selectedSecondCurrency" />
      </template>
    </UISelect>
    </div>
  </form>
</template>

