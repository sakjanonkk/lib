import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai";
import { FaFacebook } from "react-icons/fa";
import { BsFillTelephoneFill } from "react-icons/bs";
import { TbLocationFilled } from "react-icons/tb";
import { IoMdArrowDropdown } from "react-icons/io";
import { useEffect } from "react";

const Navbar = () => {
  const [nav, setNav] = useState(false);
  const [isCopied, setIsCopied] = useState(false);
  const [shadow, setShadow] = useState(false);
  const [navBg, setNavBg] = useState("#ecf0f3");
  const [navColor, setNavColor] = useState("#2c2b2b");

  const handleNav = () => {
    setNav(!nav);
  };

  function handleCopy() {
    navigator.clipboard.writeText("043-009700");
    setIsCopied(true);
    setTimeout(() => setIsCopied(false), 2000);
  }

  useEffect(() => {
    const handleShadow = () => {
      if (window.scrollY >= 90) {
        setShadow(true);
      } else {
        setShadow(false);
      }
    };
    window.addEventListener("scroll", handleShadow);
  }, []);

  return (
    <div
      className={
        shadow
          ? "fixed w-full h-100 shadow-xl bg-[white] z-[9999]"
          : "fixed w-full h-100 bg-[white] z-[9999]"
      }
    >
      <div className="flex justify-between items-center w-full h-full px-2 2xl:px-16">
        <div className=" p-4 ">
          <div style={{ display: "flex", alignItems: "center" }}>
            <Link href="/">
              <Image
                src="assets/LogoKKU.svg"
                width={50}
                height={120}
                style={{ inset: "10px" }}
                alt="/"
              />
            </Link>
            <span
              style={{ marginLeft: "20px" }}
              className="lg:text-xl md:text-l"
            >
              ENGINEER LIBRARY
            </span>
          </div>
        </div>

        <div className="ml-auto">
          <ul className="hidden md:flex p-10">
            <ul className="ml-12 font-semibold text-md tracking-widest hover:border-b hover:scale-105 ease-in duration-200">
              <li>
                <Link legacyBehavior href="/#book">
                  <a className="hover:text-[#f9a826] flex items-center ">
                    BOOK <IoMdArrowDropdown />
                  </a>
                </Link>
                <ul className="dropdown p-4">
                  <li>
                    <a href="#">Booking Request</a>
                  </li>
                </ul>
              </li>
            </ul>

            <Link href="/#map">
              <li className="ml-12 font-semibold text-md tracking-widest uppercase hover:border-b hover:scale-105 ease-in duration-200 hover:text-[#f9a826]">
                {" "}
                Map{" "}
              </li>
            </Link>
            <div className=""></div>
          </ul>
          <div onClick={handleNav} className="md:hidden p-6">
            <AiOutlineMenu size={25} />
          </div>
        </div>

        {/*============ M ADD I CON HERE !! ============= */}
        <div
          className="rounded-full shadow-lg shadow-[#464e5a] p-3 cursor-pointer"
          style={{ width: "50px", height: "50px" }}
        ></div>
        {/*============ M ADD I CON HERE !! ============= */}
      </div>

      <div
        className={
          nav
            ? "md:hidden fixed left-0 top-0 w-full h-screen bg-black/60 ease-in duration-500 z-999999999"
            : ""
        }
      >
        <div
          className={
            nav
              ? "fixed left-0 top-0 w-[75%] sm:w-[60%] md:w-[45] h-screen bg-[white] p-10 ease-in duration-500"
              : "fixed left-[-100%] top-0 w-[75%] sm:w-[60%] md:w-[45] h-screen bg-[white] p-10 ease-in duration-500"
          }
        >
          <div>
            <div className="flex w-full items-center justify-between">
              <Image src="assets/LogoKKU.svg" width={50} height={120} alt="/" />
              <div
                onClick={handleNav}
                className="rounded-full shadow-lg shadow-gray-300 p-2 cursor-pointer bg-[#efefef]"
              >
                <AiOutlineClose size={20} />
              </div>
            </div>
            <div className="border-b border-gray-300 my-4">
              <p className="w-[85%] md:w-[90%] py-4 uppercase text-lg">
                Let&apos;s Book a room !
              </p>
            </div>
          </div>
          <div>
            <ul className="uppercase">
              <Link href="/#book">
                <li
                  onClick={() => setNav(false)}
                  className="text-md py-4 hover:text-[#f9a826] "
                >
                  Book here
                </li>
              </Link>
              <Link href="/">
                <li
                  onClick={() => setNav(false)}
                  className="text-md py-4 hover:text-[#f9a826] "
                >
                  Booking list
                </li>
              </Link>
              <Link href="/#map">
                <li
                  onClick={() => setNav(false)}
                  className="text-md py-4 hover:text-[#f9a826] "
                >
                  Map
                </li>
              </Link>
            </ul>
          </div>
          <div className="pt-80 my-1">
            <p className="uppercase tracking-widest text-[black]">
              Our Contacts
            </p>
            <div className="flex items-center justify-between my-3 w-full sm:w-[100%]">
              <a href="https://www.facebook.com/kkuenglib" target="_blank">
                {" "}
                <div
                  className="rounded-full shadow-lg shadow-[#325380] p-3 cursor-pointer hover:scale-105 ease-in duration-300"
                  title="Facebook Page"
                >
                  <FaFacebook />
                </div>
              </a>
              {/* <a href="043-009700"> */}
              <div
                className={`rounded-full shadow-lg shadow-[#325380] p-3 cursor-pointer hover:scale-105 ease-in duration-300 ${
                  isCopied ? "flex justify-center items-center" : ""
                }`}
                title="Phone Number"
                onClick={handleCopy}
              >
                <BsFillTelephoneFill />
                {isCopied && (
                  <div className="text-xs text-[green] ml-4">Number copied</div>
                )}
              </div>

              {/* </a> */}
              <a href="https://kku.world/wp7md" target="_blank">
                {" "}
                <div
                  className="rounded-full shadow-lg shadow-[#325380] p-3 cursor-pointer hover:scale-105 ease-in duration-300"
                  title="Official Website For More Information"
                >
                  <TbLocationFilled />
                </div>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
