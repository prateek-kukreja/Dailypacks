import React, { useState } from "react";
import logo from "/favicon.ico";
import { Link } from "react-router-dom";
<<<<<<< Updated upstream
=======
import { useSignup } from "../hook/useSignup";
import { useNavigate } from "react-router-dom";
>>>>>>> Stashed changes

function Signup() {
  const [user, setUser] = useState({
    name: "",
    email: "",
    password: "",
  });

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
<<<<<<< Updated upstream
    console.log(user);

    try {
      const response = await fetch("http://localhost:3001/api/auth/register", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(user),
      });

      if (response.ok) {
        setUser({ name: "", email: "", password: "" });
      }
    } catch (error) {
      console.log(error);
    }
=======
    navigate("/");

    await signup(user.name, user.email, user.password);
>>>>>>> Stashed changes
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
              <div className="flex items-center p-4 my-8">
                <input
                  className=" h-4 w-4 cursor-pointer rounded mx-2"
                  type="checkbox"
                />
                <span className="text-[#545861] text-xs font-semibold">
                  I agree to the{" "}
                  <a className="text-black hover:text-light font-bold" href="">
                    terms of service
                  </a>{" "}
                  and have read the{" "}
                  <a className="text-black hover:text-light font-bold" href="">
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
            {/* form */}

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
