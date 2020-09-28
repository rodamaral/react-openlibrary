import WorkDetails from 'components/WorkDetails'
import React, { useState } from 'react'
import { useParams } from 'react-router-dom'
import { toast } from 'react-toastify'
import { useMount } from 'react-use'
import { getWork } from 'services/openLibrary'
import IWork from 'types/IWork'

export default function Work() {
    let { id } = useParams<{ id: string }>()
    const [isFetching, setIsFetching] = useState(false)
    const [response, setResponse] = useState<IWork>()

    useMount(async () => {
        try {
            setIsFetching(true)
            setResponse(undefined)
            setResponse(await getWork(id))
        } catch (error) {
            console.error(error)
            toast.error('Error fetching resource!', {
                position: toast.POSITION.BOTTOM_LEFT,
            })
        } finally {
            setIsFetching(false)
        }
    })

    return (
        <div>
            Work {id}
            {isFetching && <span>Fetching...</span>}
            {response != null && <section>{JSON.stringify(response)}</section>}
            {response !== undefined && <WorkDetails work={response} />}
        </div>
    )
}
