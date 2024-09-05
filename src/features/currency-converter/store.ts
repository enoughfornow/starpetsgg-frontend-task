
import { defineStore } from 'pinia'
import { api, keys, types } from 'entities/currency'
import { ref } from 'vue'


const useCurrencyConverterStore = defineStore('currency-converter', () => {

    const currencyListRate = ref<types.ICurrencyConvertList>()

    async function getCurrencyListRate() {
        const result = await api.getCurrencyList()

        if (result) {
            currencyListRate.value = keys.reduce((acc, key) => {
                if (key in result) {
                    acc[key] = result[key];
                }
                return acc;
            }, {});
        }
        return currencyListRate.value
    }

    return {
        currencyListRate,
        getCurrencyListRate,
    }
})

export default useCurrencyConverterStore