import AuthorName from 'components/AuthorName'
import React from 'react'

interface Author {
    type: {
        key: string
    }
    author: {
        key: string
    }
}

interface Props {
    authors: Author[]
}

const WorkDetails = ({ authors }: Props) => {
    if (authors === undefined) return <span>Vazio :(</span>

    return (
        <div style={{ border: '2px solid gray', marginBottom: '50px' }}>
            {authors && (
                <span>
                    por{' '}
                    {authors.map((author, index) => (
                        <span key={author.author.toString()}>
                            <AuthorName id={author.author.key} />
                            {index !== authors.length - 1 && ', '}
                        </span>
                    ))}
                </span>
            )}
        </div>
    )
}

export default WorkDetails
