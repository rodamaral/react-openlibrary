import React, { lazy, Suspense } from 'react'
import { Route, Switch } from 'react-router-dom'

const Home = lazy(() => import('./Home'))
const Work = lazy(() => import('./Work'))
const Table = lazy(() => import('./Table'))

export default () => (
    <Suspense fallback={<div>Loading</div>}>
        <Switch>
            <Route exact path="/">
                <Home />
            </Route>

            <Route path="/works/:id">
                <Work />
            </Route>

            <Route path="/table">
                <Table />
            </Route>
        </Switch>
    </Suspense>
)
