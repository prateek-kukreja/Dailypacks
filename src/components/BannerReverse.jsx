import { Link } from "react-router-dom";

function BannerReverse({ title, text, img }) {
  return (
    <div className="pb-24">
      <div className="container">
        <div className="flex flex-row-reverse justify-between h-96 overflow-hidden">
          <div className="w-full xl:w-6/12 text-start flex flex-col justify-center items-center bg-[#E9E9E9] px-10 md:px-24 py-0">
            <div>
              <h2 className="text-xl font-bold mb-6">{title}</h2>
              <p className="text-lg">{text}</p>
              <Link onClick={() => window.scrollTo(0, 0)} to="">
                <button className="bg-black text-white text-lg font-bold px-4 py-2 uppercase mt-8 cursor-pointer border-2 border-black transition-all duration-75 hover:bg-transparent hover:text-black">
                  Shop now
                </button>
              </Link>
            </div>
          </div>
          <div className="w-full lg:w-6/12 bg-[#E9E9E9] text-end hidden md:block">
            <img
              src={img}
              alt="banner"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default BannerReverse;
