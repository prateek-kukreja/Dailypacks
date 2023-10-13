import Main from "../images/header/backpacks.png";
import { Link } from "react-router-dom";

function Hero() {
  return (
    <div className="pt-3 w-full">
      <div className="container">
        <div className="relative flex justify-items-center">
          <div className="absolute w-full h-full top-0 left-0 bg-[#00000080] rounded-sm "></div>
          <img src={Main} className="rounded-sm" />
          <div className="absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] text-white text-2xl font-bold text-center">
            <p className="text-3xl md:text-6xl font-extrabold mb-2">Sale 30%</p>
            <p className="uppercase text-sm md:text-2xl font-medium mb-2 md:mb-5">
              Don't miss the chance
            </p>
            <Link to="">
              <button className="border-2 bg-transparent px-2 py-1 md:px-4 md:py-2 text-sm md:text-xl rounded bg-white text-black border-black hover:border-none">
                Shop Now
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Hero;
