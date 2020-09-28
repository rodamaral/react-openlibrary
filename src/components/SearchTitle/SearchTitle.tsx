import React, { ChangeEvent, Dispatch, FormEvent, SetStateAction } from 'react'

interface Props {
    query: string
    setQuery: Dispatch<SetStateAction<string>>
    onSearch: (event: FormEvent<HTMLFormElement>) => void
    isFetching: boolean
}

export default function SearchTitle({ query, setQuery, isFetching, onSearch }: Props) {
    const onQueryChange = (event: ChangeEvent<HTMLInputElement>) => {
        setQuery(event?.target.value)
    }

    return (
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
    )
}
