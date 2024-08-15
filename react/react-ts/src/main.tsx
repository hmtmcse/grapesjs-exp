import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import './pweb.js'
import './pweb.d.tsx'
declare var PWeb: any;

PWeb.render = function (id: string) {
    createRoot(document.getElementById(id)).render(
        <StrictMode>
            <App/>
        </StrictMode>,
    )
}

console.log(PWeb)
