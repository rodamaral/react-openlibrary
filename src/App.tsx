import React from 'react'
import { useTitle } from 'react-use'
import './App.css'
import Routes from 'pages/Routes'

export default function App() {
    useTitle('Openlibrary App: TODO')

    return (
        <div>
            <header>Header</header>

            <main>
                <Routes />
            </main>
        </div>
    )
}
