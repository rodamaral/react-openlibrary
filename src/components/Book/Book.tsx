import React from 'react'
import { useHistory } from 'react-router-dom'
import IDoc from 'types/IDoc'

const BookComponent = ({ book }: { book: IDoc }) => {
    const {
        title,
        author_name,
        id_goodreads = [],
        key,
        first_publish_year,
        edition_count,
        cover_edition_key,
    } = book
    const history = useHistory()

    const onClick = () => {
        console.log('book :>> ', book)
        history.push(book.key)
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
                <a href={`https://openlibrary.org${key}`}>Mostrar em Open Library</a>

                {id_goodreads.length > 0 && (
                    <a href={`https://www.goodreads.com/book/show/${id_goodreads[0]}`}>
                        Mostrar em Goodreads
                    </a>
                )}

                <button onClick={onClick}>Detalhes TODO</button>
            </footer>
        </div>
    )
}

export default BookComponent
