import { Typography } from 'antd'
import React from 'react'
import IWork from 'types/IWork'
import Authors from './Authors'
import Cover from './Cover'

const WorkDetails = ({ work }: { work: IWork }) => {
    const { subtitle, title, covers, authors, latest_revision, type, subjects, revision } = work

    return (
        <div style={{ border: '2px solid gray', marginBottom: '50px' }}>
            <Typography>
                <Typography.Title level={2}>{title}</Typography.Title>
                {subtitle && <Typography.Title level={3}>{subtitle}</Typography.Title>}

                <Authors authors={authors} />

                <p>
                    Edições: {latest_revision}/{revision}
                </p>

                <ul>{covers && covers.map((cover) => <li key={cover}>{cover}</li>)}</ul>
                <p>{latest_revision}</p>
                <p>{type ? type.key : 'sem type'}</p>
                <ul>{subjects && subjects.map((subject) => <li key={subject}>{subject}</li>)}</ul>
            </Typography>

            <Cover covers={covers} />
        </div>
    )
}

export default WorkDetails
