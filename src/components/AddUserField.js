import React from "react";

const AddUserField = () => {
  return (
    <div className="container max-w-md px-4 mx-auto grid grid-cols-1 grid-flow-row gap-4">
      <h2 className="text-3xl text-indigo-600">Add User</h2>
      <form action="" className="grid grid-cols-1 grid-flow-row gap-y-2">
        <label htmlFor="name" className="text-indigo-500">Name: </label>
        <input type="text" id="name" name="name" className="rounded-lg mb-4 bg-indigo-100 p-3"/>

        <label htmlFor="username" className="text-indigo-500">Username: </label>
        <input type="text" id="username" name="username" className="rounded-lg mb-4 bg-indigo-100 p-3"/>

        <label htmlFor="email" className="text-indigo-500">Email: </label>
        <input type="email" id="email" name="username" className="rounded-lg mb-4 bg-indigo-100 p-3"/>

        <input type="button" value="Add User" className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-lg text-white bg-indigo-600 hover:bg-indigo-700 md:py-4 md:text-lg md:px-10 cursor-pointer" />

      </form>
    </div>
  )
}

export default AddUserField