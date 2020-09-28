import React from 'react'
import { useParams } from 'react-router-dom'

export default function Page1() {
    let { id } = useParams<{ id: string }>()

    return <div>Page1 {id}</div>
}
