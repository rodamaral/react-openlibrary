import axios from 'axios'

interface SearchParams {
    q?: string
    title?: string
    page?: string | number
}

export interface IParams {
    [key: string]: string
}

const singleton = axios.create({
    baseURL: 'http://openlibrary.org',
    timeout: 20000,
    headers: { Accept: 'application/json' },
})

export const get = async (uri: string, params: SearchParams) => {
    const urlParams = new URLSearchParams(params as IParams)
    const url = `${uri}?${urlParams.toString()}`
    const res = await singleton.get(url)
    return res.data
}

export const search = (params: SearchParams) => get('/search.json', params)
