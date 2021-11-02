import React from 'react'
import ReactDOM from 'react-dom'
import { I18nextProvider } from 'react-i18next'
import { BrowserRouter } from 'react-router-dom'
import App from './App'
import i18next from './utils/I18next'
import reportWebVitals from './reportWebVitals'
import { ThemeProvider } from '@mui/material/styles'
import { theme } from 'src/themes'
import './index.css'

ReactDOM.render(
  <BrowserRouter>
    <I18nextProvider i18n={i18next}>
      <ThemeProvider theme={theme}>
        <App />
      </ThemeProvider>
    </I18nextProvider>
  </BrowserRouter>,
  document.getElementById('root'),
)

if (module.hot) {
  module.hot.accept()
}

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals()
