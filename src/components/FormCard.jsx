import React from "react";

const FormCard = () => {
  return (
    <div className="bg-white rounded-lg">
      <div className="flex justify-around text-gray-300 m-5">
        <span>Login</span>
        <span>Sign up</span>
      </div>
      <hr className="h-1" />
      <div className="m-5">
        <input
          type="text"
          id="username"
          name="username"
          placeholder="Your Email"
          className="mt-1 py-2 pl-5 w-72 border-2 border-gray rounded-full"
        />

        <input
          type="text"
          id="password"
          name="password"
          placeholder="Your Password"
          className="mt-1 py-2 pl-5 w-72 border-2 border-gray rounded-full"
        />

        <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
          Create New Account
        </button>
        <button className="bg-blue-400 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded ml-2">
          Login Via Twitter
        </button>
      </div>
    </div>
  );
};

export default FormCard;
