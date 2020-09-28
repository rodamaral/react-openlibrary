import { Pagination, Spin } from 'antd'
import WorkLine from 'components/WorkLine'
import React, { Dispatch, SetStateAction, useMemo } from 'react'
import IDoc from 'types/IDoc'

interface Props {
    isFetching: boolean
    works: IDoc[]
    page: number
    numFound: number
    setPage: Dispatch<SetStateAction<number>>
}

const WorkList = ({ works, page, numFound, isFetching, setPage }: Props) => {
    const totalPages = useMemo(() => Math.ceil(numFound / works.length), [works, numFound])

    const onChange = (page: number) => {
        setPage(page)
    }

    return (
        <section>
            <Spin spinning={isFetching} size="large">
                {works.length > 0 && (
                    <>
                        <p>
                            Showing <strong>{works.length}</strong> of <strong>{numFound}</strong>{' '}
                            results.
                        </p>

                        {totalPages > 1 && (
                            <Pagination
                                onChange={onChange}
                                defaultCurrent={page}
                                total={totalPages}
                            />
                        )}
                    </>
                )}

                {works.map((work) => (
                    <WorkLine key={work.key} work={work} />
                ))}
            </Spin>
        </section>
    )
}

export default WorkList
