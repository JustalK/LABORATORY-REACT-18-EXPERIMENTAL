/**
 * The module managing the entry point of the APP
 * @module Main
 */

import React from 'react'
import ReactDOM from 'react-dom'
import '@styles/index.scss'
import App from '@src/App'

const container = document.getElementById('root')

/** Now, we create a root * */
const root = ReactDOM.createRoot(container, { hydrate: true })
/**
 * @function render
 * Render the Home component inside the element root of the index page
 */
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
)
