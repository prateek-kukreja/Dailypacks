import React from "react";
import logo from "/favicon.ico";
import { Link } from "react-router-dom";

function Signup() {
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
          <div className="mt-8 w-full">
            <form>
              <div>
                <label className="text-black flex font-medium">
                  <span>Name</span>
                </label>
                <input className="h-12 w-full rounded-lg border px-5" />
              </div>
              <div className="mt-6">
                <label className="text-black flex font-medium">
                  <span>Email</span>
                </label>
                <input className="h-12 w-full rounded-lg border px-5" />
              </div>
              <div className="mt-6">
                <label className=" text-black flex font-medium">
                  <span>Password</span>
                </label>
                <input className="h-12 w-full rounded-lg border px-5" />
              </div>
              <div className="flex items-center p-4 my-8">
                <input
                  class=" h-4 w-4 cursor-pointer rounded mx-2"
                  type="checkbox"
                />
                <span class="text-[#545861] text-xs font-semibold">
                  I agree to the{" "}
                  <a class="text-black hover:text-light font-bold" href="">
                    terms of service
                  </a>{" "}
                  and have read the{" "}
                  <a class="text-black hover:text-light font-bold" href="">
                    privacy policy
                  </a>
                </span>
              </div>

              <div className="mt-6">
                <button className="font-bold px-8 py-3 w-full rounded-md bg-black text-white disabled:bg-disabled hover:opacity-90">
                  Sign up
                </button>
              </div>
            </form>
            <div className="mt-8 flex flex-col items-center justify-center">
              <div className="mb-6">
                <span className="text-md line-height-[20px]">
                  <Link to="/">← Back</Link>
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
