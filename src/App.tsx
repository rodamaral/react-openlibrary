import 'antd/dist/antd.css'
import Routes from 'pages/Routes'
import React from 'react'
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import { useTitle } from 'react-use'
import './App.css'

export default function App() {
    useTitle('Openlibrary App: TODO')

    return (
        <>
            <main>
                <Routes />
            </main>

            <ToastContainer />
        </>
    )
}
