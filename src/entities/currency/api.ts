import useRequest from '@/composables/useRequest'
import { ICurrencyRates } from './types'


const { get } = useRequest();

export default {

    async getCurrencyList() {
        const { data } = await get<ICurrencyRates>('/api/currency');

        return data
    }
}