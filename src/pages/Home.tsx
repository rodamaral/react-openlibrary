import { Layout } from 'antd'
import SearchTitle from 'components/SearchTitle'
import WorkList from 'components/WorkList'
import React, { FormEvent, useCallback, useState } from 'react'
import { connect } from 'react-redux'
import { toast } from 'react-toastify'
import { search } from 'services/openLibrary'
import { reset } from 'store/auth'
import IDoc from 'types/IDoc'

const { Header, Content } = Layout

function Home({ reset }: { reset: Function }) {
    const [query, setQuery] = useState('')
    const [isFetching, setIsFetching] = useState(false)
    const [works, setWorks] = useState<IDoc[]>([])
    const [numFound, setNumFound] = useState(0)
    const [page, setPage] = useState(1)

    const onFetch = useCallback(async () => {
        try {
            setIsFetching(true)
            setWorks([])

            const result = await search({ title: query, page })
            const { docs = [], numFound = 0 } = result

            setWorks(docs)
            setNumFound(numFound)
        } catch (error) {
            console.error(error)
            toast.error('Error fetching resource!', {
                position: toast.POSITION.BOTTOM_LEFT,
            })
        } finally {
            setIsFetching(false)
        }
    }, [query, page])

    const onSearch = async (event: FormEvent<HTMLFormElement>) => {
        event.preventDefault()
        onFetch()
    }

    return (
        <Layout>
            <Header>Header</Header>

            <Content>
                <SearchTitle
                    query={query}
                    setQuery={setQuery}
                    isFetching={isFetching}
                    onSearch={onSearch}
                />

                <WorkList
                    works={works}
                    isFetching={isFetching}
                    numFound={numFound}
                    setPage={setPage}
                    onFetch={onFetch}
                />
            </Content>
        </Layout>
    )
}

const mapDispatchToProps = {
    reset,
}

function mapStateToProps(state: any) {
    return { token: state.auth.token }
}

export default connect(mapStateToProps, mapDispatchToProps)(Home)
