function Newsletter() {
  return (
    <>
      <div className="news flex flex-col justify-center items-center h-72 bg-[#191919]">
        <div className="news-text text-center">
          <h2 className="text-4xl font-extrabold text-white mb-5">
            Newsletter
          </h2>
          <form className="flex flex-col sm:flex-row gap-2">
            <input
              type="email"
              placeholder="your@email.com"
              className="text-base px-3 py-2 border-none outline-none text-center sm:text-left cursor-pointer"
            />
            <button
              type="submit"
              className="text-base font-medium bg-[#e9e9e9] text-black px-3 py-2"
            >
              Subscribe
            </button>
          </form>
        </div>
      </div>
    </>
  );
}

export default Newsletter;
