import { defineStore } from 'pinia'
import { UISelectTypes } from '@/ui'
import { types, api, keys } from 'entities/currency'
import { ref } from 'vue'


const useCurrencyStore = defineStore('currency', () => {
    const selectedCurrency = ref<UISelectTypes.ESelectTypes>(UISelectTypes.ESelectTypes.usd)

    const currencyList = ref<types.ICurrencyList>({})

    function selectCurrency(text: UISelectTypes.ESelectTypes) {
        selectedCurrency.value = text
    }




    async function getCurrencyList() {
        const result = await api.getCurrencyList()
        if (result) {
            currencyList.value = keys.reduce((acc, key) => {
                if (key in result) {
                    acc[key] = result[key];
                }
                return acc;
            }, {});
        }
    }



    return {
        selectedCurrency,
        currencyList,
        selectCurrency,
        getCurrencyList,
    }
})

export default useCurrencyStore