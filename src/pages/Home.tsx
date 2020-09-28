import Book from 'components/Book'
import React, { ChangeEvent, FormEvent, useState } from 'react'
import { connect } from 'react-redux'
import { toast } from 'react-toastify'
import { search } from 'services/openLibrary'
import { reset } from 'store/auth'
import IDoc from 'types/IDoc'

function Home({ reset }: { reset: Function }) {
    const [query, setQuery] = useState('')
    const [isFetching, setIsFetching] = useState(false)
    const [books, setBooks] = useState<IDoc[]>([])
    const [numFound, setNumFound] = useState(0)

    const onSearch = async (event: FormEvent<HTMLFormElement>) => {
        try {
            event.preventDefault()
            setIsFetching(true)
            setBooks([])

            const result = await search({ title: query, page: 1 })
            const { docs = [], numFound = 0 } = result

            setBooks(docs)
            setNumFound(numFound)
        } catch (error) {
            console.error(error)
            toast.error('Error fetching resource!', {
                position: toast.POSITION.BOTTOM_LEFT,
            })
        } finally {
            setIsFetching(false)
        }
    }

    const onQueryChange = (event: ChangeEvent<HTMLInputElement>) => {
        setQuery(event?.target.value)
    }

    return (
        <div>
            <section>
                <div>
                    <form onSubmit={onSearch}>
                        <div>
                            <div>
                                <input
                                    type="text"
                                    placeholder="Título"
                                    defaultValue={query}
                                    onChange={onQueryChange}
                                />
                            </div>

                            <div>
                                <button type="submit" disabled={isFetching}>
                                    Procurar
                                </button>
                            </div>
                        </div>
                    </form>
                </div>
            </section>
            <section>
                <div>
                    {isFetching && <span>Loading...</span>}
                    {books.length > 0 && (
                        <p>
                            Showing <strong>{books.length}</strong> of <strong>{numFound}</strong>{' '}
                            results.
                        </p>
                    )}
                    {books.map((book) => (
                        <Book key={book.key} book={book} />
                    ))}
                </div>
            </section>
        </div>
    )
}

const mapDispatchToProps = {
    reset,
}

function mapStateToProps(state: any) {
    return { token: state.auth.token }
}

export default connect(mapStateToProps, mapDispatchToProps)(Home)
