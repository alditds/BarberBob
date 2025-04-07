"use client";

import Link from "next/link";
import { useState } from "react";
import { Menu, X } from "lucide-react";
import { cardo } from "@/fonts";
import { PhoneIcon } from "@heroicons/react/16/solid";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  function handleClick() {
    setIsOpen(!isOpen);
  }

  return (
    <nav className="sticky top-0 z-10 flex w-full min-w-[320px] justify-between bg-white px-9 py-4 shadow-sm lg:px-22">
      <Link href={"#"} className="flex items-center">
        <img
          src="./images/barberbob.svg"
          className="h-12 w-10 lg:h-16 lg:w-14"
        />
        <h1 className={`${cardo.className} text-2xl font-bold lg:text-4xl`}>
          BARBERBOB
        </h1>
      </Link>

      <div className="hidden flex-col gap-4 pr-4 lg:flex">
        <span className="gap-4 lg:flex lg:justify-end">
          <PhoneIcon className="mt-1 h-8 w-8" />
          <h2 className="text-3xl font-semibold">0822-4814-1434</h2>
        </span>
        <ul className={`flex gap-4`}>
          <li className="flex items-center justify-center">
            <Link
              href={"#home"}
              className="rounded-4xl border-2 border-gray-400 bg-white px-2 py-1 font-semibold"
            >
              Home
            </Link>
          </li>
          <li className="flex items-center justify-center">
            <Link
              href={"#about"}
              className="rounded-4xl border-2 border-gray-400 bg-white px-2 py-1 font-semibold"
            >
              About Us
            </Link>
          </li>
          <li className="flex items-center justify-center">
            <Link
              href={"#services"}
              className="rounded-4xl border-2 border-gray-400 bg-white px-2 py-1 font-semibold"
            >
              Services
            </Link>
          </li>
          <li className="flex items-center justify-center">
            <Link
              href={"#testimonial"}
              className="rounded-4xl border-2 border-gray-400 bg-white px-2 py-1 font-semibold"
            >
              Testimonials
            </Link>
          </li>
          <li className="flex items-center justify-center">
            <Link
              href={"#contact"}
              className="rounded-4xl border-2 border-gray-400 bg-white px-2 py-1 font-semibold"
            >
              Contact Us
            </Link>
          </li>
        </ul>
      </div>

      <button onClick={handleClick} className="z-10 lg:hidden">
        {isOpen ? <X /> : <Menu />}
      </button>

      <div
        className={`${isOpen ? "right-0 backdrop-blur-lg" : "-right-full"} fixed top-0 flex min-h-screen w-full items-center justify-center transition-all duration-300 ease-in-out`}
      >
        <ul className="flex flex-col items-center gap-4">
          <li>
            <Link
              href="#kome"
              className="rounded-2xl border bg-white px-2 py-1"
            >
              Home
            </Link>
          </li>
          <li>
            <Link
              href="#about"
              className="rounded-2xl border bg-white px-2 py-1"
            >
              About Us
            </Link>
          </li>
          <li>
            <Link
              href="#services"
              className="rounded-2xl border bg-white px-2 py-1"
            >
              Services
            </Link>
          </li>
          <li>
            <Link
              href="#testimonial"
              className="rounded-2xl border bg-white px-2 py-1"
            >
              Testimonials
            </Link>
          </li>
          <li>
            <Link
              href="#contact"
              className="rounded-2xl border bg-white px-2 py-1"
            >
              Contact Us
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}
