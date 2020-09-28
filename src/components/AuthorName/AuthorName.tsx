import { Skeleton } from 'antd'
import React, { useState } from 'react'
import { toast } from 'react-toastify'
import { useMount } from 'react-use'
import { getJsonEntityByKey } from 'services/openLibrary'
import IAuthor from 'types/IAuthor'

const AuthorName = ({ id }: { id: string }) => {
    const [isFetching, setIsFetching] = useState(false)
    const [author, setAuthor] = useState<IAuthor>()

    useMount(async () => {
        try {
            setIsFetching(true)
            const res = await getJsonEntityByKey(id)
            setAuthor(res)
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
        <>
            {isFetching && (
                <Skeleton.Input style={{ width: 150, height: 16 }} active size="small" />
            )}
            {/* {author != null && <section>{JSON.stringify(author)}</section>} */}
            {author != null && <span>{author.name}</span>}
        </>
    )
}

export default AuthorName
