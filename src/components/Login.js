import React, { useRef, useState } from "react";
import Header from "./Header";
import { checkValidSignInFrom, checkValidSignUpFrom } from "../utils/validate";

const Login = () => {
  const [isSignIn, setIsSignIn] = useState(true);
  const [errorMessage, seterrorMessage] = useState(null);

  const email = useRef(null);
  const password = useRef(null);

  const toggleForm = () => {
    setIsSignIn(!isSignIn);
  };

  const handleButtonForm = () => {
    const message = isSignIn
      ? checkValidSignInFrom(email.current.value, password.current.value)
      : checkValidSignUpFrom(email.current.value, password.current.value);
    seterrorMessage(message);
  };

  return (
    <div>
      <Header />
      <div>
        <img
          className="absolute blur-[3px] "
          src="https://assets.nflxext.com/ffe/siteui/vlv3/0e916f82-036f-468a-a098-52592391d3a8/null/IN-en-20240902-POP_SIGNUP_TWO_WEEKS-perspective_a8d5d4ae-15d5-4414-b272-b12d2fce75cd_large.jpg"
          alt="background-image with movie posters"
        />
      </div>
      <form
        onSubmit={(e) => {
          e.preventDefault();
        }}
        className="rounded-lg absolute p-12 w-3/12 bg-black my-36 mx-auto right-0 left-0 text-white bg-opacity-85  "
      >
        <h1 className="font-bold text-3xl py-4">
          {isSignIn ? "Sign In" : "Sign Up"}
        </h1>
        {!isSignIn && (
          <input
            required
            type="text"
            placeholder="Name"
            className=" bg-transparent border-2 border-gray-500 border-opacity-50 focus-within:outline-2 outline-white p-4 my-4 w-full rounded-sm"
          />
        )}
        <input
          ref={email}
          type="email"
          placeholder="Email Address"
          className=" bg-transparent border-2 border-gray-500 border-opacity-50  focus-within:outline-2 outline-white p-4 my-4 w-full rounded-sm"
        />
        <input
          ref={password}
          type="password"
          placeholder="Password"
          className="bg-transparent border-2 border-gray-500 border-opacity-50 focus-within:outline-2 outline-white  p-4 my-4 w-full rounded-sm"
        />
        <div className="text-red-500">{errorMessage}</div>
        <button
          onClick={handleButtonForm}
          className="p-4 my-6 bg-red-700 w-full rounded-sm "
        >
          {isSignIn ? "Sign In" : "Sign Up"}
        </button>
        <div className="py-4">
          {isSignIn ? (
            <p className="py-4">
              New To Netflix?{" "}
              <span
                className="cursor-pointer text-red-500"
                onClick={toggleForm}
              >
                Sign Up Now?
              </span>
            </p>
          ) : (
            <p className="py-4">
              Already Registered?{" "}
              <span
                className="cursor-pointer text-red-500"
                onClick={toggleForm}
              >
                Sign In.
              </span>
            </p>
          )}
        </div>
      </form>
    </div>
  );
};

export default Login;
