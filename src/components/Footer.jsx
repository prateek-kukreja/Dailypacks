import React from "react";

function Footer() {
  return (
    <footer className="flex flex-col justify-center text-center h-40 bg-[black]">
      <div className="flex gap-10 text-center flex-wrap justify-center">
        <a
          href="#"
          className="text-lg font-medium text-white hover:underline underline-offset-2"
        >
          About
        </a>
        <a
          href="#"
          className="text-lg font-medium text-white hover:underline underline-offset-2"
        >
          Blog
        </a>
        <a
          href="#"
          className="text-lg font-medium text-white hover:underline underline-offset-2"
        >
          Team
        </a>
        <a
          href="#"
          className="text-lg font-medium text-white hover:underline underline-offset-2"
        >
          Pricing
        </a>
        <a
          href="#"
          className="text-lg font-medium text-white hover:underline underline-offset-2"
        >
          Contact
        </a>
        <a
          href="#"
          className="text-lg font-medium text-white hover:underline underline-offset-2"
        >
          Terms
        </a>
      </div>
      <p className="mt-8 text-base font-medium text-white">
        Design &nbsp; by{" "}
        <a
          target="_blank"
          rel="noreferrer"
          style={{ color: "white" }}
          href="https://github.com/Abderraouf-Rahmani"
        >
          &nbsp; Abderraouf
        </a>
      </p>
    </footer>
  );
}

export default Footer;
