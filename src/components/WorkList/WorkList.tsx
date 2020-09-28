import { Spin } from 'antd'
import WorkLine from 'components/WorkLine'
import React, { Dispatch, SetStateAction } from 'react'
import IDoc from 'types/IDoc'

interface Props {
    isFetching: boolean
    works: IDoc[]
    numFound: number
    setPage: Dispatch<SetStateAction<number>>
    get: () => Promise<void>
}

const WorkList = ({ works, numFound, isFetching, setPage, get }: Props) => {
    const onClick = () => {
        setPage((p) => p + 1)
        get()
    }

    return (
        <section>
            <Spin spinning={isFetching} size="large">
                {works.length > 0 && (
                    <p>
                        Showing <strong>{works.length}</strong> of <strong>{numFound}</strong>{' '}
                        results.
                    </p>
                )}

                {works.map((work) => (
                    <WorkLine key={work.key} work={work} />
                ))}

                {works.length < numFound && <button onClick={onClick}>Próximo</button>}
            </Spin>
        </section>
    )
}

export default WorkList
