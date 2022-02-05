import React from 'react'
import Header from './components/Header'
import AddUserField from './components/AddUserField'
import ViewUserField from './components/ViewUserField'

const App = () => {
  return (
    <div className="container  mx-auto">
      <Header />
      <div id='content-container' className="container max-w-7xl mt-12 mx-auto grid grid-cols-1">
        <AddUserField />
        <ViewUserField />
      </div>
    </div>
  )
}

export default App