import { defineStore } from 'pinia'
import { UISelectTypes } from '@/ui'
import { types, api } from 'entities/currency'
import { ref } from 'vue'


const useCurrencyRateStore = defineStore('currency-rate', () => {
    const selectedCurrency = ref<UISelectTypes.ESelectTypes>(UISelectTypes.ESelectTypes.usd)

    const currencyList = ref<types.ICurrency>()

    function selectCurrency(text: UISelectTypes.ESelectTypes) {
        selectedCurrency.value = text
    }


    async function getCurrencyList() {
        const result = await api.getCurrencyList()
        if (result) {
            const currencies = ['usd', 'eur', 'rub']
            const list = currencies.reduce((acc, from) => {
                acc[from] = currencies.reduce((obj, to) => {
                    obj[to] = result[`${from}-${to}`]
                    return obj
                }, {})
                return acc
            }, {})

            currencyList.value = list
        }
        return currencyList.value
    }



    return {
        selectedCurrency,
        currencyList,
        selectCurrency,
        getCurrencyList,
    }
})

export default useCurrencyRateStore