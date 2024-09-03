import { UIIconTypes } from '@/ui'
import { defineStore } from 'pinia'
import { types, api, keys } from 'entities/currency'
import { reactive, ref } from 'vue'


const useCurrencyStore = defineStore('currency', () => {
    const currencies = ref<UIIconTypes.EIconTypes[]>()

    const selectedCurrency = ref<UIIconTypes.EIconTypes>(UIIconTypes.EIconTypes.usd)

    const currencyList = ref<types.ICurrencyRates>()

    const filteredList = ref({});

    const isLoading = ref(false)

    function selectCurrency(text: UIIconTypes.EIconTypes) {
        selectedCurrency.value = text
    }

    async function getCurrencyList() {
        const result = await api.getCurrencyList()
        if (result) {
            currencyList.value = Object.keys(result).reduce((acc, key) => {
                if (keys.includes(key)) {
                    acc[key] = result[key];
                }
                return acc;
            }, {})
        }
    }

    function filterCurrency() {

        for (const key in currencyList) {
            if (key.toLowerCase() === selectedCurrency.value) {
                if (filteredList[key]) {
                    if (Array.isArray(filteredList[key])) {
                        filteredList[key].push(currencyList[key]);
                    } else {
                        filteredList[key] = [filteredList[key], currencyList[key]];
                    }
                } else {
                    filteredList[key] = currencyList[key];
                }
            }
        }

        return filteredList;
    }

    return {
        currencies,
        selectedCurrency,
        currencyList,
        filteredList,
        selectCurrency,
        getCurrencyList,
        filterCurrency,

    }
})

export default useCurrencyStore