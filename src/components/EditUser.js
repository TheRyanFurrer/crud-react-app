import React from 'react';



let people = [
  {
    name: 'Ryan Furrer',
    username: 'theryanfurrer',
    email: 'ryan.furrer@example.com',
    image: 'https://doodleipsum.com/700x700/avatar-3?bg=6392D9&i=258047980742b4938d78891d296875ef'
  },
  {
    name: 'Wally Furrer',
    username: 'walterlfurrer',
    email: 'wally.furrer@example.com',
    image: 'https://doodleipsum.com/700x700/avatar-3?bg=D96363&i=0664d49fc3fde6fe9c6148bfad15bf52'
  },
  {
    name: 'Megan Ryan Furrer',
    username: 'idiotwife',
    email: 'megan.ryan.furrer@example.com',
    image: 'https://doodleipsum.com/700x700/avatar-3?bg=7463D9&i=e488b341e08a626073e3dabf8294b347'
  }
]

const EditUser = () => {
  return (
    <div className="container mx-auto">
      <h2 className="text-indigo-600 text-3xl mb-4">Edit Me!</h2>
      <div className='grid grid-cols-2 grid-flow-row gap-1'>
        <p className='text-lg'>{people[0].name}</p>
        <a href="#" className="text-indigo-600 hover:text-indigo-900">Edit</a>

        <p className='text-lg'>{people[0].username}</p>
        <a href="#" className="text-indigo-600 hover:text-indigo-900">Edit</a>

        <p className='text-lg'>{people[0].email}</p>
        <a href="#" className="text-indigo-600 hover:text-indigo-900">Edit</a>
      </div>
    </div>
  )
}

export default EditUser