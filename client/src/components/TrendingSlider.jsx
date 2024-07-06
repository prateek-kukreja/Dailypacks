import TrendingItem from "./TrendingItem";
import { AiOutlineArrowLeft, AiOutlineArrowRight } from "react-icons/ai";

function TrendingSlider() {
  const slideLeft = () => {
    let slider = document.getElementById("slider");
    slider.scrollLeft = slider.scrollLeft - 450;
  };

  const slideRight = () => {
    let slider = document.getElementById("slider");
    slider.scrollLeft = slider.scrollLeft + 450;
  };

  return (
    <div className="pb-24">
      <div className="container">
        <div className="flex justify-between">
          <h3 className="text-2xl font-semibold !mb-10">Trending Now</h3>
          <div className="flex gap-2">
            <button
              title="scroll left"
              onClick={slideLeft}
              className="text-[white] bg-[#373737] hover:bg-black text-xl h-10 w-10 cursor-pointer transition-all duration-[0.1s] ease-[ease-in] p-2 border-[none]"
            >
              <AiOutlineArrowLeft />
            </button>
            <button
              title="scroll right"
              onClick={slideRight}
              className="text-[white] bg-[#373737] hover:bg-black text-xl h-10 w-10 cursor-pointer transition-all duration-[0.1s] ease-[ease-in] p-2 border-[none]"
            >
              <AiOutlineArrowRight />
            </button>
          </div>
        </div>
        <div
          className="row-container flex gap-4 overflow-x-hidden overflow-y-hidden whitespace-nowrap scroll-smooth relative px-1 py-2"
          id="slider"
        >
          <TrendingItem />
        </div>
      </div>
    </div>
  );
}

export default TrendingSlider;
