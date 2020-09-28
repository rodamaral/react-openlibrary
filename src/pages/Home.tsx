import { Layout } from 'antd'
import SearchTitle from 'components/SearchTitle'
import WorkList from 'components/WorkList'
import React, { FormEvent, useCallback, useEffect, useState } from 'react'
import { toast } from 'react-toastify'
import { useAsyncFn, useUpdateEffect } from 'react-use'
import { search } from 'services/openLibrary'
import IDoc from 'types/IDoc'

const { Header, Content } = Layout

export default function Home() {
    const [query, setQuery] = useState('')
    const [page, setPage] = useState(1)

    const [state, get] = useAsyncFn(async () => {
        const response = await search({ title: query, page })
        return response
    }, [query, page])

    const works: IDoc[] = state.value?.docs || []
    const numFound: number = state.value?.numFound || 0

    const trySearch = useCallback(() => {
        if (query !== '') {
            get()
        } else {
            toast.warning('Digite o título para pesquisar', {
                position: toast.POSITION.BOTTOM_LEFT,
            })
        }
    }, [get, query])

    const onSearch = (event: FormEvent<HTMLFormElement>) => {
        event.preventDefault()
        trySearch()
    }

    useEffect(() => {
        if (state.error) {
            console.error(state.error)
            toast.error('Erro de requisição', {
                position: toast.POSITION.BOTTOM_LEFT,
            })
        }
    }, [state.error])

    useUpdateEffect(() => {
        trySearch()
    }, [page])

    return (
        <Layout>
            <Header>Header</Header>

            <Content style={{ marginLeft: 20, marginRight: 20, minHeight: 'calc(100vh - 64px)' }}>
                <div style={{ margin: '20px auto', maxWidth: 1200 }}>
                    <SearchTitle
                        query={query}
                        setQuery={setQuery}
                        isFetching={state.loading}
                        onSearch={onSearch}
                    />

                    <WorkList
                        works={works}
                        page={page}
                        isFetching={state.loading}
                        numFound={numFound}
                        setPage={setPage}
                    />
                </div>
            </Content>
        </Layout>
    )
}
