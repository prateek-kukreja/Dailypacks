import React, { useState } from "react";
import logo from "/favicon.ico";
import { Link, useNavigate } from "react-router-dom";
import { useSignup } from "../hook/useSignup";
import { toast } from "react-toastify";

function Signup() {
  const [user, setUser] = useState({
    name: "",
    email: "",
    password: "",
  });
  const { signup, error } = useSignup();

  const handleInput = (e) => {
    let id = e.target.id;
    let value = e.target.value;

    setUser({
      ...user,
      [id]: value,
    });
  };

  const navigate = useNavigate();
  const handleSubmit = async (e) => {
    e.preventDefault();

    const success = await signup(user.name, user.email, user.password);

    if (success) {
      navigate("/");
    }

    toast.success("Successful Sign-Up");
  };
  return (
    <div className="flex min-h-screen w-full justify-center items-center bg-[#f7f9fa]">
      <div className="m-4 w-full max-w-[520px]">
        <div className="bg-[#ffffff] m-auto flex w-full flex-col items-center p-6 rounded-2xl border md:p-12 py-10">
          <div className="flex items-center">
            <img className="h-[1.75rem]" src={logo} alt="dailypacks" />
            <p className="text-sm font-medium">Dailypacks</p>
          </div>
          <h1 className="mt-4 text-center text-xl font-bold md:mt-8 md:text-2xl">
            Create Account
          </h1>
          {/* error bar */}
          {error && (
            <div className="w-full border border-[#e7195a] text-[#e7195a] rounded p-2.5 mt-8 border-solid bg-[#ffefef]">
              {error}
            </div>
          )}
          {/* error bar */}
          <div className="mt-8 w-full">
            {/* form */}
            <form onSubmit={handleSubmit}>
              <div>
                <label className="text-black flex font-medium">Name</label>
                <input
                  className="h-12 w-full rounded-lg border px-5"
                  name="name"
                  id="name"
                  value={user.name}
                  onChange={handleInput}
                />
              </div>
              <div className="mt-6">
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
                <label className=" text-black flex font-medium">Password</label>
                <input
                  className="h-12 w-full rounded-lg border px-5"
                  name="password"
                  id="password"
                  value={user.password}
                  onChange={handleInput}
                />
              </div>

              <div className="mt-6">
                <button className="font-bold px-8 py-3 w-full rounded-md bg-black text-white disabled:bg-disabled hover:opacity-90">
                  Sign up
                </button>
              </div>
            </form>
            {/* form */}

            <div className="mt-8 flex flex-col items-center justify-center">
              <div className="mb-6">
                <span className="text-md line-height-[20px]">
                  <Link to="/sign_in">← Back</Link>
                </span>
              </div>
              <span className="text-md line-height-[20px] text-[#545861]">
                Already have an account?{" "}
                <Link to="/sign_in" className="text-black">
                  Sign in
                </Link>
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Signup;
