import axios from 'axios'

export interface IParams {
    [details: string]: string
}

const singleton = axios.create({
    baseURL: 'http://openlibrary.org',
    timeout: 5000,
    headers: { Accept: 'application/json' },
})

const get = async (uri: string, params: IParams) => {
    const urlParams = new URLSearchParams(params)
    const url = `${uri}?${urlParams.toString()}`
    const res = await singleton.get(url)
    return res.data
}

export const findBooks = (title: string) => get('/search.json', { title })
