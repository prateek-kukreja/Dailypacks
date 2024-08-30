import React, { useState } from "react";
import logo from "/favicon.ico";
import { Link, useNavigate } from "react-router-dom";
import { useSignin } from "../hook/useSignin";
import { toast } from "react-toastify";

function Signin() {
  const [user, setUser] = useState({
    email: "",
    password: "",
  });
  const { signin, error, isLoading } = useSignin();

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

    const success = await signin(user.email, user.password);

    if (success) {
      navigate("/");
      toast.success("Successful Sign-In");
    }
  };

  return (
    <div className="flex min-h-screen w-full justify-center items-center bg-[#f7f9fa]">
      <div className="m-4 w-full max-w-[500px]">
        <div className="bg-[#ffffff] m-auto flex w-full flex-col items-center p-6  rounded-2xl border md:p-12 py-10">
          <div className="flex items-center">
            <img className="h-[1.75rem]" src={logo} alt="dailypacks" />
            <p className="text-sm font-medium">Dailypacks</p>
          </div>
          <h1 className="mt-4 text-center text-xl font-bold md:mt-8 md:text-2xl">
            Sign in to your account
          </h1>
          {/* error bar */}
          {error && (
            <div className="w-full border border-[#e7195a] text-[#e7195a] rounded p-2.5 mt-8 border-solid bg-[#ffefef]">
              {error}
            </div>
          )}
          {/* error bar */}

          <div className="w-full mt-8 items-start border rounded border-black px-2 py-4">
            <h2 className="font-bold text-lg pb-2">Demo Account</h2>
            <div className="flex flex-col md:flex-row  font-medium gap-2">
              <p>
                Email: <span className=" font-normal">prateek@google.com</span>{" "}
              </p>
              <p>
                Password : <span className=" font-normal">prateek123</span>
              </p>
            </div>
            <p></p>
          </div>

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
                <button className="font-bold px-8 py-3 w-full rounded-md bg-black text-white disabled:bg-disabled hover:opacity-90">
                  <span className="pr-4">Sign in</span>
                  {isLoading && (
                    <div
                      className="inline-block h-5 w-5 animate-spin rounded-full border-2 border-solid border-current border-r-transparent align-[-0.125em] motion-reduce:animate-[spin_1.5s_linear_infinite]"
                      role="status"
                    >
                      <span className="!absolute !-m-px !h-px !w-px !overflow-hidden !whitespace-nowrap !border-0 !p-0 ![clip:rect(0,0,0,0)]">
                        Loading...
                      </span>
                    </div>
                  )}
                </button>
              </div>
            </form>
            {/* form */}

            <div className="mt-8 flex flex-col items-center justify-center">
              <div className="mb-6">
                {/* <span className="text-md line-height-[20px]">
                  <Link to="/">← Back</Link>
                </span> */}
              </div>
              <span className="text-md line-height-[20px] text-[#545861]">
                Don't have an account?{" "}
                <Link to="/sign_up" className="text-black">
                  Sign up
                </Link>
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Signin;
