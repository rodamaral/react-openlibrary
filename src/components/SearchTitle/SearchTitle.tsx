import { Input, Typography } from 'antd'
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
            <Typography>
                <Typography.Title>Open Library - Busca de livros</Typography.Title>
            </Typography>

            <form onSubmit={onSearch}>
                <Input.Search
                    placeholder="Título"
                    value={query}
                    onChange={onQueryChange}
                    loading={isFetching}
                    enterButton
                />
            </form>
        </section>
    )
}
