import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import './pweb.js'

PWeb.render = function (id) {
    createRoot(document.getElementById(id)).render(
        <StrictMode>
            <App/>
        </StrictMode>,
    )
}

console.log(PWeb)