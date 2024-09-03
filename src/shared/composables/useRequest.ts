import axios from 'axios'

export default function useRequest() {
    const instance = axios.create({
        baseURL: import.meta.env.VITE_BASE_URL,
        headers: {
            'Content-type': 'application/json'
        }
    })

    return {
        get: instance.get,
    }
}