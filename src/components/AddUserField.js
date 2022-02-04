import React from "react";

const AddUserField = () => {
  return (
    <div className="grid grid-cols-1 grid-flow-row gap-2">
      <h2 className="text-3xl">Add User</h2>
      <form action="" className="grid grid-cols-1 grid-flow-row gap-y-4">
        <label htmlFor="name" className="text-size-inherit">Name: </label>
        <input type="text" id="name" name="name" className="bg-indigo-100 p-3"/>
        <label htmlFor="username">Username: </label>
        <input type="text" id="username" name="username" className="bg-indigo-100 p-3"/>
        <input type="button" value="Add User" className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 md:py-4 md:text-lg md:px-10 cursor-pointer" />
      </form>
    </div>
  )
}

export default AddUserField