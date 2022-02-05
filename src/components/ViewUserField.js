import React from "react";
// import Example from "./Header";

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

const ViewUserField = () => {
  return (
    <div className="container px-4 mx-auto flex flex-col gap-4">
      <h2 className="text-3xl text-indigo-600">View Users</h2>
      <div className="-my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
        <div className="py-2 align-middle inline-block min-w-full sm:px-6 lg:px-8">
          <div className="shadow overflow-hidden border-b border-indigo-200 sm:rounded-lg">
            <table className="min-w-full divide-y divide-indigo-200">
              <thead className="bg-indigo-50">
                <tr>
                  <th
                    scope="col"
                    className="px-6 py-3 text-left text-xs font-medium text-indigo-500 uppercase tracking-wider"
                  >
                    Name
                  </th>
                  <th
                    scope="col"
                    className="px-6 py-3 text-left text-xs font-medium text-indigo-500 uppercase tracking-wider"
                  >
                    Email
                  </th>
                  {/* <th
                    scope="col"
                    className="px-6 py-3 text-left text-xs font-medium text-indigo-500 uppercase tracking-wider"
                  >
                    Status
                  </th> */}
                  {/* <th
                    scope="col"
                    className="px-6 py-3 text-left text-xs font-medium text-indigo-500 uppercase tracking-wider"
                  >
                    Role
                  </th> */}
                  <th scope="col" className="relative px-6 py-3">
                    <span className="sr-only">Edit</span>
                  </th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-indigo-200">
                {people.map((person) => (
                  <tr key={person.email}>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="flex items-center">
                        <div className="flex-shrink-0 h-10 w-10">
                          <img className="h-10 w-10 rounded-full" src={person.image} alt="" />
                        </div>
                        <div className="ml-4">
                          <div className="text-sm font-medium text-indigo-900">{person.name}</div>
                          <div className="text-sm text-indigo-500">{person.username}</div>
                        </div>
                      </div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="text-sm text-indigo-900">{person.email}</div>
                      {/* <div className="text-sm text-indigo-500">{person.department}</div> */}
                    </td>
                    {/* <td className="px-6 py-4 whitespace-nowrap">
                      <span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-green-100 text-green-800">
                        Active
                      </span>
                    </td> */}
                    {/* <td className="px-6 py-4 whitespace-nowrap text-sm text-indigo-500">{person.role}</td> */}
                    <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                      <a href="#" className="text-indigo-600 hover:text-indigo-900">
                        Edit
                      </a>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ViewUserField