import React from 'react'
import { ApolloProvider } from '@apollo/client'
import ReactDOM from 'react-dom'
import { I18nextProvider } from 'react-i18next'
import { Provider } from 'react-redux'
import { BrowserRouter } from 'react-router-dom'
import { client } from './Apollo'
import App from './App'
import i18next from './I18next'
import reportWebVitals from './reportWebVitals'
import Store from './Store'
import 'tailwindcss/tailwind.css'
import './index.css'

ReactDOM.render(
  <ApolloProvider client={client}>
    <Provider store={Store}>
      <BrowserRouter>
        <I18nextProvider i18n={i18next}>
          <App />
        </I18nextProvider>
      </BrowserRouter>
    </Provider>
  </ApolloProvider>,
  document.getElementById('root'),
)

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals()
