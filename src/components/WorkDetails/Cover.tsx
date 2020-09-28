import React from 'react'

const Cover = ({ covers }: { covers: number[] }) => {
    if (covers.length === 0) return null

    return <img src={`https://covers.openlibrary.org/b/id/${covers[0]}-M.jpg`} alt="Cover" />
}

export default Cover
