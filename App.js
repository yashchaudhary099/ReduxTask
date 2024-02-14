import React from 'react'
import StackNavigation from './src/Navigation'
import { Provider } from 'react-redux'
import Store from './src/Redux/Store/store'

const App = () => {

  return (
    <Provider store={Store}>
      <StackNavigation />
    </Provider>

  )
}

export default App