import { ApolloProvider } from '@apollo/client'
import React, { FunctionComponent } from 'react'
import ReactDOM from 'react-dom'
import { setConfig } from 'react-hot-loader'
import { Provider } from 'react-redux'
import { BrowserRouter } from 'react-router-dom'
import { client } from './apollo'
import App from './App'
import './index.css'
import reportWebVitals from './reportWebVitals'
import Store from './store'

setConfig({
  showReactDomPatchNotification: false,
  reloadHooks: true,
})

const render = (Component: FunctionComponent) => {
  ReactDOM.render(
    <ApolloProvider client={client}>
      <Provider store={Store}>
        <BrowserRouter>
          <Component />
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
