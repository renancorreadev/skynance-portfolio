import React from 'react'
import ReactDOM from 'react-dom'
import App from './App'

import {LanguageProvider} from './context/language'

ReactDOM.render(
  <LanguageProvider>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </LanguageProvider>,
  document.getElementById('root')
)
