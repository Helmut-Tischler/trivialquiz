import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import { HashRouter, Routes, Route } from 'react-router-dom/dist'
import { Provider } from 'react-redux'
import store from './redux/store'

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(
    <React.StrictMode>
        <HashRouter>
            <Routes>
                <Route path="/" element={<Provider store={store}>
                    <App />
                </Provider>} />
            </Routes>
        </HashRouter>
    </React.StrictMode>,
    document.getElementById("root")
)