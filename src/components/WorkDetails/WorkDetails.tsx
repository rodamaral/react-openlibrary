import AuthorName from 'components/AuthorName'
import React from 'react'
import IWork from 'types/IWork'

const WorkDetails = ({ work }: { work: IWork }) => {
    const {
        // title,
        // key,
        // covers,
        // latest_revision,
        // authors,
        // type,
        // revision,
        /////////////////////
        subtitle,
        title,
        created,
        covers,
        subject_places,
        last_modified,
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

                {authors && (
                    <p>
                        por{' '}
                        {authors.map((author) => (
                            <AuthorName id={author.author.key} />
                        ))}
                    </p>
                )}
                <p>
                    Edições: {latest_revision}/{revision}
                </p>

                <ul>
                    {covers.map((cover) => (
                        <li>{cover}</li>
                    ))}
                </ul>
                <p>{latest_revision}</p>
                <p>{type ? type.key : 'sem type'}</p>
            </div>

            <img
                //src={`http://covers.openlibrary.org/b/olid/${cover_edition_key}-S.jpg`}
                alt="Cover"
            />
        </div>
    )
}

export default WorkDetails
