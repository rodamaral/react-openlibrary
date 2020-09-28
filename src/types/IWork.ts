export default interface IWork {
    subtitle: string
    title: string
    created: {
        type: string
        value: string
    }
    covers: number[]
    subject_places: string[]
    last_modified: {
        type: string
        value: string
    }
    subject_people: string[]
    key: string
    authors: [
        {
            type: {
                key: string
            }
            author: {
                key: string
            }
        }
    ]
    latest_revision: number
    type: {
        key: string
    }
    subjects: string[]
    revision: number
}
