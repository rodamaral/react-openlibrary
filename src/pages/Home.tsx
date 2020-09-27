import Button from 'components/Button'
import React, { ChangeEvent, FormEvent, useState } from 'react'
import { connect } from 'react-redux'
import { useHistory } from 'react-router-dom'
import { findBooks } from 'services/openLibrary'
import { reset } from 'store/auth'

function Home({ reset }: { reset: Function }) {
    const history = useHistory()

    const [query, setQuery] = useState('')
    const [isFetching, setIsFetching] = useState(false)
    const [books, setBooks] = useState<any[]>([])
    const [numFound, setNumFound] = useState(0)

    const onSearch = async (event: FormEvent<HTMLFormElement>) => {
        event.preventDefault()
        setIsFetching(true)
        setBooks([])

        const result = await findBooks(query)
        const { docs = [], numFound = 0 } = result

        setIsFetching(false)
        setBooks(docs)
        setNumFound(numFound)
    }

    const onQueryChange = (event: ChangeEvent<HTMLInputElement>) => {
        setQuery(event?.target.value)
    }

    const onClick = () => {
        reset()
        history.push('/Page1')
    }

    return (
        <div>
            Home
            <Button onClick={onClick}>Reset</Button>
            <section>
                <div>
                    <form onSubmit={onSearch}>
                        <div>
                            <div>
                                <input
                                    type="text"
                                    placeholder="Title"
                                    defaultValue={query}
                                    onChange={onQueryChange}
                                />
                            </div>

                            <div>
                                <button type="submit">Search</button>
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
                        <p key={book.id}>{book.title}</p>
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
