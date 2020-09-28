import React from 'react'
import IWork from 'types/IWork'
import Authors from './Authors'
import Cover from './Cover'

const WorkDetails = ({ work }: { work: IWork }) => {
    const {
        subtitle,
        title,
        // created,
        covers,
        subject_places,
        // last_modified,
        subject_people,
        key,
        authors,
        latest_revision,
        type,
        subjects,
        revision,
    } = work
    return (
        <div style={{ border: '2px solid gray', marginBottom: '50px' }}>
            <div>
                <h3>{title}</h3>
                <h4>{subtitle}</h4>

                <Authors authors={authors} />

                <p>
                    Edições: {latest_revision}/{revision}
                </p>

                <ul>{covers && covers.map((cover) => <li>{cover}</li>)}</ul>
                <p>{latest_revision}</p>
                <p>{type ? type.key : 'sem type'}</p>
            </div>

            <Cover covers={covers} />
        </div>
    )
}

export default WorkDetails
