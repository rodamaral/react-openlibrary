import { List, Typography } from 'antd'
import React from 'react'
import IWork from 'types/IWork'
import Authors from './Authors'
import Cover from './Cover'

const WorkDetails = ({ work }: { work: IWork }) => {
    const { subtitle, title, covers, authors, latest_revision, subjects, revision } = work

    return (
        <div style={{ border: '2px solid gray', marginBottom: '50px' }}>
            <Typography>
                <Typography.Title level={2}>{title}</Typography.Title>
                {subtitle && <Typography.Title level={3}>{subtitle}</Typography.Title>}
                <Cover covers={covers} />

                <Authors authors={authors} />

                <p>
                    Edições: {latest_revision}/{revision}
                </p>

                <List
                    header={<div>Assuntos</div>}
                    bordered
                    dataSource={subjects}
                    renderItem={(item) => <List.Item>{item}</List.Item>}
                />
            </Typography>
        </div>
    )
}

export default WorkDetails
