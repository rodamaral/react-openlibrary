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
    if (authors === undefined) return <i>Autor desconhecido</i>

    return (
        <div>
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
