"use client";

import Link from "next/link";
import { useState } from "react";

import { GetWindowSize } from "../_utils/getWindowsSize";
import { Navigation } from "./navigation";

const Header = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const { width, height } = GetWindowSize();

  const handleClickToggleBtn = () => setIsOpen((prevState) => !prevState);

  return (
    <>
      <div className="w-screen h-20 bg-white shadow-lg z-40">
        <div className="flex justify-between max-w-7xl mx-auto text-slate-800 pt-6">
          <h1 className="mx-10 text-2xl">
            <Link href="/">PRACTICE</Link>
          </h1>
          <div className="mx-10 text-2xl">
            <button
              type="button"
              aria-controls="navigation"
              aria-expanded={isOpen}
              aria-label="naviの開閉"
              onClick={handleClickToggleBtn}
              className="toggleButton"
            >
              <span className="line-1"></span>
              <span className="line-2"></span>
              <span className="line-3"></span>
            </button>
          </div>
        </div>
      </div>
      <Navigation open={isOpen} onClick={handleClickToggleBtn} />
      {isOpen ? (
        <div className="fixed h-full w-full bg-black opacity-0 z-50" onClick={() => handleClickToggleBtn()}></div>
      ) : (
        <></>
      )}
    </>
  );
};

export default Header;
