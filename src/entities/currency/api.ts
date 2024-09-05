import useRequest from '@/composables/useRequest'


const { get } = useRequest();

export default {

    async getCurrencyList() {
        const { data } = await get('/api/currency');

        return data
    }
}