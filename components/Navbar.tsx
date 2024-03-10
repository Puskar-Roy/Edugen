"use client";
import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import logo from "@/public/logo.png";
import { NavbarItems } from "@/interfaces";
import { NavbarData } from "@/utils/data";
import { CgMenuRightAlt } from "react-icons/cg";
import { MdMenuBook } from "react-icons/md";
import { LuBookMarked } from "react-icons/lu";

const NavItem = ({ href, tags }: NavbarItems) => {
  return (
    <li className="hover:text-rose-700">
      <Link href={href}>{tags}</Link>
    </li>
  );
};


const Navbar = () => {
  const [toggle, setToggle] = useState<boolean>(false);
  const toogleMenu = () => {
    setToggle(!toggle);
  };
  return (
    <header className="">
      <nav className="flex justify-between items-center w-[80%] mx-auto">
        <Link className="z-20" href="/">
          <Image src={logo} height={20} width={160} alt="logo" />
        </Link>
        <div className="sm:hidden">
          {toggle ? (
            <MdMenuBook
              onClick={toogleMenu}
              className=" text-sky-400 text-3xl"
            />
          ) : (
            <LuBookMarked
              onClick={toogleMenu}
              className="text-rose-500 text-3xl"
            />
          )}
        </div>
        <div className={toggle ? "sm:hidden absolute top-0 left-0 h-screen w-[300px] flex justify-center items-center  backdrop-blur-[150px] rounded-2xl transition-all duration-900" : "sm:hidden absolute top-0 left-[-100%] h-screen w-[300px] flex justify-center items-center  backdrop-blur-[1px] rounded-2xl transition-all duration-900"}>
          <ul className="flex flex-col gap-[30px]">
            {NavbarData.map(({ href, tags }: NavbarItems) => (
              <NavItem key={href} href={href} tags={tags} />
            ))}
          </ul>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
