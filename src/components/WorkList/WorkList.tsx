import { Skeleton } from 'antd'
import WorkLine from 'components/WorkLine'
import React, { Dispatch, SetStateAction } from 'react'
import IDoc from 'types/IDoc'

interface Props {
    isFetching: boolean
    works: IDoc[]
    numFound: number
    setPage: Dispatch<SetStateAction<number>>
    onFetch: () => Promise<void>
}

const WorkList = ({ works, numFound, isFetching, setPage, onFetch }: Props) => {
    const onClick = () => {
        setPage((p) => p + 1)
        onFetch()
    }

    return (
        <section>
            <div>
                {isFetching && <Skeleton avatar active paragraph={{ rows: 10 }} />}

                {works.length > 0 && (
                    <p>
                        Showing <strong>{works.length}</strong> of <strong>{numFound}</strong>{' '}
                        results.
                    </p>
                )}
                {works.map((work) => (
                    <WorkLine key={work.key} work={work} />
                ))}
            </div>

            {works.length < numFound && <button onClick={onClick}>Próximo</button>}
        </section>
    )
}

export default WorkList
