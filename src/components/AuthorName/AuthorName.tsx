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
        <div>
            {isFetching && <span>Fetching...</span>}
            {/* {author != null && <section>{JSON.stringify(author)}</section>} */}
            {author != null && <section>{author.name}</section>}
        </div>
    )
}

export default AuthorName
