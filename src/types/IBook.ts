export default interface Book {
    publishers: string[]
    pagination: string
    type: {
        key: string
    }
    title: string
    series: string[]
    notes: {
        type: string
        value: string
    }
    number_of_pages: number
    created: {
        type: string
        value: string
    }
    languages: [
        {
            key: string
        }
    ]
    last_modified: {
        type: string
        value: string
    }
    latest_revision: 2
    publish_country: string
    key: string
    authors: [
        {
            key: string
        }
    ]
    publish_date: number
    publish_places: string[]
    works: [
        {
            key: string
        }
    ]
    contributions: string[]
    by_statement: string
    revision: number
}
