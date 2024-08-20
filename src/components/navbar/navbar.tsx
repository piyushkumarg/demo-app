"use client";
import { useState } from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import { ImCross } from "react-icons/im";
import { navigationItem } from "../../constant/navbar";
import Link from "next/link";

function Navbar() {
  const [open, setOpen] = useState(false);
  const [theme, setTheme] = useState("dark");
  const [navigation, setNavigation] = useState(navigationItem);
  const [scrolling, setScrolling] = useState(false);

  return (
    <>
      <nav>
        {/* Desktop menu navigation */}
        <div className="bg-red-500 flex px-16 justify-between items-center flex-grow p-4">
          <div className="lg:gap-4 gap-1 hidden md:flex  ">
            {navigation.map((item, index) => (
              <Link href={item.src} key={index}>
                <div className="text-xl font-semibold">{item.name}</div>
              </Link>
            ))}
          </div>
          {/* Mobile menu Navigation  */}
          <div className="md:hidden  bg-bgDark bg-red-500 p-4">
            {open && (
              <div className=" flex flex-col  items-end  gap-4 ">
                {navigation.map((item, index) => (
                  <Link href={item.src} key={index}>
                    <div className="text-xl font-semibold">{item.name}</div>
                  </Link>
                ))}
              </div>
            )}
          </div>

          <div className="flex gap-4 items-center justify-center absolute top-2 right-2">
            <button className="text-2xl" onClick={() => setOpen(!open)}>
              <img src="/image/menu-bar.png" alt="" className="h-8 w-8" />
            </button>
          </div>
        </div>
      </nav>
    </>
  );
}

export default Navbar;
