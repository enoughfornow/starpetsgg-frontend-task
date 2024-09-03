import axios from 'axios'

export default function useRequest() {
    return axios.create({
        baseURL: import.meta.env.VITE_BASE_URL,
        headers: {
            'Content-type': 'application/json'
        }
    })
} 