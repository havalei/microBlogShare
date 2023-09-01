import { useState } from "react";
import React from "react";
import { useNavigate } from "react-router-dom";
import { useContext } from "react";
import { UserContext } from "../Context/UserContext";
import { LogedContext } from "../Context/LogedContext";

export default function Login() {
  const navigate = useNavigate();
  const { user, setUser } = useContext(UserContext);
  const [password, setPassword] = useState("");
  const { loged, setLoged } = useContext(LogedContext);

  function OpenTheApp() {
    // localStorage.setItem("userId", JSON.stringify(1));

    const storedUser = JSON.parse(localStorage.getItem("userName"));
    const storedPassword = JSON.parse(localStorage.getItem("password"));

    if (user === storedUser && password === storedPassword) {
      alert("Welcome home");
      navigate("/Home");
      setLoged(true);
    } else {
      if (user === storedUser && password !== storedPassword) {
        alert("Error on your password");
        setLoged(false);
      } else if (user !== storedUser && password === storedPassword) {
        alert("Error on your User Name");
        setLoged(false);
      } else {
        alert(
          "Do you have an account? If yes, there is an error on your User Name and on your password, if not please register"
        );
        setLoged(false);
      }
    }
  }

  return (
    <div className="h-full bg-white">
      <div className="h-full">
        <div className="flex min-h-full flex-col justify-center px-6 py-12 lg:px-8">
          <div className="sm:mx-auto sm:w-full sm:max-w-sm">
            <img
              className="mx-auto h-10 w-auto"
              src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600"
              alt="Your Company"
            />

            <h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">
              Welcome in the virtual World
            </h2>
            <h5 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">
              Sign in to your account
            </h5>
          </div>

          <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
            <form className="space-y-6" action="#" method="POST">
              <div>
                <label
                  for="email"
                  className="block text-sm font-medium leading-6 text-gray-900"
                >
                  Enter your user{" "}
                </label>

                <div className="mt-2">
                  <input
                    required
                    class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                    placeholder="User Name"
                    onChange={(e) => setUser(e.target.value)}
                  />
                </div>
              </div>

              <div>
                <div className="flex items-center justify-between">
                  <label
                    for="password"
                    className="block text-sm font-medium leading-6 text-gray-900"
                  >
                    Password
                  </label>
                </div>

                <div className="mt-2">
                  <input
                    onChange={(e) => setPassword(e.target.value)}
                    required
                    class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  />
                </div>
              </div>

              <div>
                <button
                  type="button"
                  className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                  onClick={(e) => OpenTheApp()}
                >
                  Sign in
                </button>
              </div>
            </form>

            <p className="mt-10 text-center text-sm text-gray-500">
              Not a member?
              <a
                href="/SignIn"
                className="font-semibold leading-6 text-indigo-600 hover:text-indigo-500"
              >
                Register here
              </a>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
