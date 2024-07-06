import React, { useState } from "react";
import logo from "/favicon.ico";
import { Link, useNavigate } from "react-router-dom";

function Signin() {
  const [user, setUser] = useState({
    email: "",
    password: "",
  });

  const navigate = useNavigate();
  const handleInput = (e) => {
    let id = e.target.id;
    let value = e.target.value;

    setUser({
      ...user,
      [id]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(user);

    try {
      const response = await fetch("http://localhost:3001/api/auth/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(user),
      });

      if (response.ok) {
        const res_data = await response.json();
        console.log("response from server", res_data);

        setUser({ email: "", password: "" });
        navigate("/");
      } else {
        console.log("invalid credential");
      }
    } catch (error) {
      console.log("Login page error", error);
    }
  };

  return (
    <div className="flex min-h-screen w-full justify-center items-center bg-[#f7f9fa]">
      <div className="my-4 w-full max-w-[450px]">
        <div className="bg-[#ffffff] m-auto flex w-full flex-col items-center p-6 py-0 md:rounded-2xl md:border md:p-12 md:py-10">
          <div className="flex items-center">
            <img className="h-[1.75rem]" src={logo} alt="dailypacks" />
            <p className="text-sm font-medium">Dailypacks</p>
          </div>
          <h1 className="mt-4 text-center text-xl font-bold md:mt-8 md:text-2xl">
            Sign in to your account
          </h1>
          <div className="mt-8 w-full">
            {/* form */}
            <form onSubmit={handleSubmit}>
              <div>
                <label className="text-black flex font-medium">Email</label>
                <input
                  className="h-12 w-full rounded-lg border px-5"
                  name="email"
                  id="email"
                  value={user.email}
                  onChange={handleInput}
                />
              </div>
              <div className="mt-6">
                <label className=" text-black flex font-semibold">
                  Password
                </label>
                <input
                  className="h-12 w-full rounded-lg border px-5"
                  name="password"
                  id="password"
                  value={user.password}
                  onChange={handleInput}
                />
              </div>
              <div className="mt-6">
                <button className="font-bold px-8 py-3 w-full rounded-md bg-black text-white">
                  Sign in
                </button>
              </div>
            </form>
            {/* form */}

            <div className="mt-8 flex flex-col items-center justify-center">
              <div className="mb-6">
                <span className="text-md line-height-[20px]">
                  <Link to="/">← Back</Link>
                </span>
              </div>
              <span className="text-md line-height-[20px] text-[#545861]">
                Don't have an account?{" "}
                <Link to="/sign_up" className="text-black">
                  Sign up
                </Link>
              </span>
              <div className="mt-2">
                <div className="text-md line-height-[20px]">
                  <a href="">Forgot your password?</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Signin;
