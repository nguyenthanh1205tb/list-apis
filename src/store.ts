import { createStore, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import { composeWithDevTools } from 'redux-devtools-extension'
import { useSelector as useReduxSelector, TypedUseSelectorHook } from 'react-redux'
import RootReducer from 'src/reducers'

const composeEnhancers = composeWithDevTools({})

export const useSelector: TypedUseSelectorHook<ReturnType<typeof RootReducer>> = useReduxSelector
export default createStore(RootReducer, /* preloadedState, */ composeEnhancers(applyMiddleware(thunk)))
