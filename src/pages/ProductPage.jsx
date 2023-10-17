import Newsletter from "../components/Newsletter";
import Footer from "../components/Footer";
import { useParams } from "react-router-dom";
import { items } from "../components/AllData";
import { useState } from "react";
import TrendingSlider from "../components/TrendingSlider";

function ProductPage() {
  const { id } = useParams();
  const item = items.filter((item) => item.id === parseInt(id));

  const [image, setImage] = useState(item[0].img);
  const changeImage = (e) => {
    setImage(e.target.src);
  };

  return (
    <>
      <div className="pt-4">
        <div className="container">
          <div className="mb-14 md:mb-24 flex flex-col md:flex-row gap-8 relative">
            <h3 className="absolute text-center font-bold left-1/2 top-1 -translate-x-1/2 text-3xl w-80 md:w-auto">
              {item[0].name}
            </h3>

            <div className="w-full md:w-6/12 h- pt-12">
              <div className="w-full h-3/4 flex justify-center">
                <img
                  src={image}
                  alt="product"
                  className="w-3/4 h-full object-cover"
                />
              </div>
              <div className="w-full flex justify-center items-center py-7 px-5 gap-3">
                <img
                  onMouseOver={changeImage}
                  src={item[0].img}
                  alt="product"
                  className="w-[22%] h-[20%] object-cover cursor-pointer"
                />
                <img
                  onMouseOver={changeImage}
                  src={item[0].otherImgs[0]}
                  alt="product"
                  className="w-[22%] h-[20%] object-cover cursor-pointer"
                />
                <img
                  onMouseOver={changeImage}
                  src={item[0].otherImgs[1]}
                  alt="product"
                  className="w-[22%] h-[20%] object-cover cursor-pointer"
                />
              </div>
            </div>
            <div className="w-full md:w-6/12 h-full bg-[#E5E5E5] text-lg pt-7 md:pt-40 px-5 md:px-12 pb-10 md:pb-20">
              <p className="text-xl mb-5 sm:mb-12 leading-normal">
                {item[0].desc}
              </p>
              <div className="flex flex-col sm:flex-row justify-between md:mb-12 font-semibold items-center text-2xl gap-5 sm:gap-0">
                <p>Quantity</p>
                <div className="flex border border-solid border-black">
                  <button className="text-3xl w-14 h-14 text-black border-r-[1px] cursor-pointer bg-white  border-black transition-all duration-200">
                    -
                  </button>
                  <p className="-outline-offset-2 w-16 h-14 text-center pt-1"></p>
                  <button className="text-3xl w-14 h-14 text-black border-l-[1px] cursor-pointer bg-white border-black transition-all duration-200">
                    +
                  </button>
                </div>
                <p className="">₹{item[0].price}</p>
              </div>
              <div className="flex justify-center gap-5">
                <button className="w-6/12 h-14 text-base uppercase font-bold cursor-pointer transition-all duration-200 border-2 border-solid border-black text-white bg-black hover:text-black hover:bg-transparent">
                  add to cart
                </button>
                <button className="w-6/12 h-14 text-base uppercase font-bold cursor-pointer transition-all duration-200 bg-[#B6002C] text-white border-2 border-solid border-[#B6002C] hover:bg-transparent hover:text-[#B6002C]">
                  buy now
                </button>
              </div>
            </div>
          </div>

          <div className="flex flex-col md:flex-row gap-5 md:gap-7 justify-between w-full h-24 mb-72 md:mb-24">
            <div className="bg-[#E5E5E5] w-full flex flex-col justify-between p-5">
              <p className="text-xl font-semibold pb-2">Colour:</p>
              <p className="text-base">{item[0].colour}</p>
            </div>
            <div className="bg-[#E5E5E5] w-full flex flex-col justify-between p-5">
              <p className="text-xl font-semibold pb-2">Material:</p>
              <p className="text-base">{item[0].material}</p>
            </div>
            <div className="bg-[#E5E5E5] w-full flex flex-col justify-between p-5">
              <p className="text-xl font-semibold pb-2">Dimensions:</p>
              <p className="text-base">{item[0].dimensions}</p>
            </div>
          </div>
        </div>
      </div>
      <TrendingSlider />
      <Newsletter />
      <Footer />
    </>
  );
}

export default ProductPage;
