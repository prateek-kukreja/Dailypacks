import Newsletter from "../components/Newsletter";
import Footer from "../components/Footer";

function ProductPage() {
  return (
    <>
      <div className="pt-4">
        <div className="container">
          <div className="mb-14 md:mb-24 flex flex-col md:flex-row gap-8 relative">
            <h3 className="absolute text-center font-bold left-1/2 top-1 -translate-x-1/2 text-4xl w-80 md:w-auto">
              Backpack Name
            </h3>

            <div className="w-full md:w-6/12 h- pt-12">
              <div className="w-full h-3/4 flex justify-center">
                <img
                  src=""
                  alt="product"
                  className="w-3/4 h-full object-cover"
                />
              </div>
            </div>

            <div className="w-full md:w-6/12 h-full bg-[#E5E5E5] text-lg pt-7 md:pt-40 px-5 md:px-12 pb-10 md:pb-20">
              <p className="text-xl mb-5 sm:mb-12 leading-normal">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Libero, voluptates neque! Mollitia corporis nostrum impedit
                perspiciatis neque nisi possimus distinctio aliquid a commodi,
                nihil ut iure veniam id quas maxime velit quo minima. Aliquid
                deserunt ratione libero necessitatibus magnam quo.
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
                <p className="">₹____</p>
              </div>
              <div className="flex justify-center gap-5">
                <button className="w-6/12 h-14 text-base uppercase font-bold cursor-pointer transition-all duration-200 border-2 border-solid border-black text-white bg-black hover:text-black hover:bg-transparent">
                  add to cart
                </button>
                <button className="w-6/12 h-14 text-base uppercase font-bold cursor-pointer transition-all duration-200 bg-[#20a87e] text-white border-2 border-solid border-[#20a87e] hover:bg-transparent hover:text-[#20a87e]">
                  buy now
                </button>
              </div>
            </div>
          </div>

          <div className="flex flex-col md:flex-row gap-5 md:gap-7 justify-between w-full h-24 mb-72 md:mb-24">
            <div className="bg-[#E5E5E5] w-full flex flex-col justify-between p-5">
              <p className="text-xl font-semibold pb-2">Colour:</p>
              <p className="text-base"></p>
            </div>
            <div className="bg-[#E5E5E5] w-full flex flex-col justify-between p-5">
              <p className="text-xl font-semibold pb-2">Material:</p>
              <p className="text-base"></p>
            </div>
            <div className="bg-[#E5E5E5] w-full flex flex-col justify-between p-5">
              <p className="text-xl font-semibold pb-2">Dimensions:</p>
              <p className="text-base"></p>
            </div>
          </div>
        </div>
      </div>
      <Newsletter />
      <Footer />
    </>
  );
}

export default ProductPage;
