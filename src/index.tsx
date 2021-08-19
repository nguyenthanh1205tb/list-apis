import { ApolloProvider } from '@apollo/client'
import React, { FunctionComponent } from 'react'
import ReactDOM from 'react-dom'
import { setConfig } from 'react-hot-loader'
import { I18nextProvider } from 'react-i18next'
import { Provider } from 'react-redux'
import { BrowserRouter } from 'react-router-dom'
import Theme from 'src/styled/Theme'
import { ThemeProvider } from 'styled-components'
import { client } from './apollo'
import App from './App'
import i18next from './i18next'
import './index.css'
import reportWebVitals from './reportWebVitals'
import Store from './store'
import './logRocket'

setConfig({
  showReactDomPatchNotification: false,
  reloadHooks: true,
})

const render = (Component: FunctionComponent) => {
  ReactDOM.render(
    <ApolloProvider client={client}>
      <Provider store={Store}>
        <BrowserRouter>
          <ThemeProvider theme={Theme}>
            <I18nextProvider i18n={i18next}>
              <Component />
            </I18nextProvider>
          </ThemeProvider>
        </BrowserRouter>
      </Provider>
    </ApolloProvider>,
    document.getElementById('root'),
  )
}
render(App)

if (module.hot) {
  module.hot.accept('./App', () => {
    render(App)
  })
}

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals()
