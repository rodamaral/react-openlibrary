import { Button } from 'antd'
import React from 'react'
import { useHistory } from 'react-router-dom'
import IDoc from 'types/IDoc'

const WorkLine = ({ work }: { work: IDoc }) => {
    const {
        title,
        author_name,
        id_goodreads = [],
        key,
        first_publish_year,
        edition_count,
        cover_edition_key,
    } = work
    const history = useHistory()

    const onClick = () => {
        console.log('work :>> ', work)
        history.push(work.key)
    }

    return (
        <div style={{ border: '2px solid gray', marginBottom: '50px' }}>
            <div>
                <p>{title}</p>
                {author_name && <p>por {author_name.join(', ')}</p>}
                <p>Publicado pela primeira vez: {first_publish_year}</p>
                <p>Edições: {edition_count}</p>
            </div>

            <img
                src={`http://covers.openlibrary.org/b/olid/${cover_edition_key}-S.jpg`}
                alt="Cover"
            />

            <footer>
                <Button type="link" href={`https://openlibrary.org${key}`}>
                    Ver obra
                </Button>

                <a href={`https://openlibrary.org${key}`}>Mostrar em Open Library</a>

                {id_goodreads.length > 0 && (
                    <a href={`https://www.goodreads.com/book/show/${id_goodreads[0]}`}>
                        Mostrar em Goodreads
                    </a>
                )}

                <Button type="primary" onClick={onClick}>
                    Ver obra
                </Button>
            </footer>
        </div>
    )
}

export default WorkLine
