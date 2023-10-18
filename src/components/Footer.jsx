function Footer() {
  return (
    <footer className="pt-10 w-full px-3 py-4 sm:px-10 xl:px-24 2xl:px-48 bg-black text-white">
      <div className="container">
        <h3 className="-mb-2 text-xl font-bold">Bags,</h3>
        <h3 className="text-xl font-bold">that carry your day.</h3>

        <h6 className="mt-10">
          Design by{" "}
          <a
            href="https://github.com/Abderraouf-Rahmani"
            target="_blank"
            rel="noreferrer"
            className="font-bold hover:underline"
          >
            abderraouf
          </a>
          , all product images from{" "}
          <a
            href="https://www.dailyobjects.com/"
            target="_blank"
            rel="noreferrer"
            className="font-bold hover:underline"
          >
            dailyobjects.com
          </a>
        </h6>
      </div>
    </footer>
  );
}

export default Footer;
