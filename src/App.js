import React from 'react'
import Header from './components/Header'
import AddUserField from './components/AddUserField'
import ViewUserField from './components/ViewUserField'

const App = () => {
  return (
    <div className="container max-w-7xl mx-auto">
      <Header />
      <div id='content-container' className=" mx-auto grid grid-cols-2 gap-8 p-8">
        <AddUserField />
        <ViewUserField />
      </div>
    </div>
  )
}

export default App