
import { defineStore } from 'pinia'
import { api, keys, types } from 'entities/currency'
import { ref } from 'vue'


const useCurrencyConverterStore = defineStore('currency-converter', () => {

    const currencyListRate = ref<types.ICurrencyConvertList>()

    async function getCurrencyListRate() {

        const result = await api.getCurrencyList()
        if (result) {
            currencyListRate.value = Object.fromEntries(
                Object.entries(result)
                    .filter(([key]) => keys.includes(key))
                    .map(([key, value]) => [key, value as number]));
        }
        return currencyListRate.value
    }

    return {
        currencyListRate,
        getCurrencyListRate,
    }
})

export default useCurrencyConverterStore