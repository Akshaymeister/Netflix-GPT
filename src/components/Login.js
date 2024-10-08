import React, { useRef, useState } from "react";
import Header from "./Header";
import { checkValidSignInFrom, checkValidSignUpFrom } from "../utils/validate";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  updateProfile,
} from "firebase/auth";
import { auth } from "../utils/firebase";
import { useDispatch } from "react-redux";
import { addUser } from "../utils/userSlice";
import { BG_IMG } from "../utils/constants/constants";

const Login = () => {
  const [isSignIn, setIsSignIn] = useState(true);
  const [errorMessage, seterrorMessage] = useState(null);
  const dispatch = useDispatch();

  const email = useRef(null);
  const password = useRef(null);
  const name = useRef(null);

  const toggleForm = () => {
    setIsSignIn(!isSignIn);
  };

  const handleButtonForm = () => {
    const message = isSignIn
      ? checkValidSignInFrom(email.current.value, password.current.value)
      : checkValidSignUpFrom(
          name.current.value,
          email.current.value,
          password.current.value
        );
    seterrorMessage(message);
    if (message) return;

    //Sign in Sign Up Logic
    if (!isSignIn) {
      createUserWithEmailAndPassword(
        auth,
        email.current.value,
        password.current.value
      )
        .then((userCredential) => {
          const user = userCredential.user;
          updateProfile(user, {
            displayName: name.current.value,
          }).then(() => {
            const { uid, email, displayName } = auth.currentUser;
            dispatch(
              addUser({
                uid: uid,
                email: email,
                displayName: displayName,
              })
            );
          });
        })
        .catch((error) => {
          seterrorMessage("User Already Exists!!");
        });
    } else {
      signInWithEmailAndPassword(
        auth,
        email.current.value,
        password.current.value
      )
        .then((userCredential) => {})
        .catch((error) => {
          seterrorMessage("Invalid Credentials!");
        });
    }
  };

  return (
    <div>
      <Header />
      <div>
        <img
          className="absolute w-full blur-[3px] "
          src={BG_IMG}
          alt="background-image with movie posters"
        />
      </div>
      <form
        onSubmit={(e) => {
          e.preventDefault();
        }}
        className="rounded-lg absolute p-12 w-3/12 bg-black my-28 mx-auto right-0 left-0 text-white bg-opacity-85  "
      >
        <h1 className="font-bold text-3xl py-4">
          {isSignIn ? "Sign In" : "Sign Up"}
        </h1>
        {!isSignIn && (
          <input
            ref={name}
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
        <div className="text-red-500 font-semibold">{errorMessage}</div>
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
