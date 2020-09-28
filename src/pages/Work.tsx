import { Layout, Spin, Typography } from 'antd'
import WorkDetails from 'components/WorkDetails'
import React, { useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { toast } from 'react-toastify'
import { useAsyncFn, useMount } from 'react-use'
import { getWork } from 'services/openLibrary'

const { Header, Content } = Layout

export default function Work() {
    let { id } = useParams<{ id: string }>()

    const [state, get] = useAsyncFn(async () => {
        const response = await getWork(id)
        return response
    }, [id])

    useMount(get)

    useEffect(() => {
        if (state.error) {
            console.error(state.error)
            toast.error('Erro de requisição', {
                position: toast.POSITION.BOTTOM_LEFT,
            })
        }
    }, [state.error])

    return (
        <Layout>
            <Header>Livro</Header>

            <Content style={{ marginLeft: 20, marginRight: 20, minHeight: 'calc(100vh - 64px)' }}>
                <div style={{ margin: '20px auto', maxWidth: 1200 }}>
                    <Typography>
                        <Typography.Title>Open Library - Detalhes de Livro</Typography.Title>
                    </Typography>

                    <Spin spinning={state.loading} size="large">
                        {state.value !== undefined && <WorkDetails work={state.value} />}
                    </Spin>
                </div>
            </Content>
        </Layout>
    )
}
