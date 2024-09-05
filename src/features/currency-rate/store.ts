import { defineStore } from 'pinia'
import { UISelectTypes } from '@/ui'
import { types, api } from 'entities/currency'
import { ref } from 'vue'


const useCurrencyRateStore = defineStore('currency-rate', () => {
    const selectedCurrency = ref<UISelectTypes.ESelectTypes>(UISelectTypes.ESelectTypes.usd)

    const currencyList = ref<types.ICurrency>({})

    function selectCurrency(text: UISelectTypes.ESelectTypes) {
        selectedCurrency.value = text
    }




    async function getCurrencyList() {
        const result = await api.getCurrencyList()
        if (result) {
            for (const from in types.ECurrency) {
                if (types.ECurrency.hasOwnProperty(from)) {
                    currencyList.value[from] = {};
                    for (const to in types.ECurrency) {
                        if (types.ECurrency.hasOwnProperty(to) && from !== to) {
                            currencyList.value[from][to] = result[`${from}-${to}`];
                        }
                    }
                }
            }
        }
    }



    return {
        selectedCurrency,
        currencyList,
        selectCurrency,
        getCurrencyList,
    }
})

export default useCurrencyRateStore