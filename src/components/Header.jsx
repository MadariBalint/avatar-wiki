import { useEffect, useRef, useState } from "react";
import Menu from "./Menu";
import { MenuIcon, X } from "lucide-react";
import { Link } from "react-router-dom";
import useLockBodyScroll from "../utils/useLockBodyScroll"

import logo from "../assets/logo.png";

function Header() {
  const [open, setOpen] = useState(false);
  const menuRef = useRef(null)



  useEffect(() => {
    function handleClickOutside(event) {
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        setOpen(false)
      }
    }

    if (open) {
      document.addEventListener("mousedown", handleClickOutside)

    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside)
    }
  }, [open])
  useLockBodyScroll(open)


  return (
    <>
      <div className="flex h-[10rem] flex-row items-center justify-between">
        <div className="h-full max-w-[50%] md:max-w-[30%]">
          <Link to="/">
            <img
              src={logo}
              alt="logo"
              className="h-full max-h-full w-auto object-contain drop-shadow-[0_-3px_3px_rgba(0,0,0,0.35)] md:ml-3 lg:ml-10"
            />
          </Link>
        </div>
        <button
          className="mr-12 ml-auto md:hidden"
          onClick={() => setOpen(prev => !prev)}
        >
          {open ? <X /> : <MenuIcon />}
        </button>

        <div className="hidden md:block">
          <Menu />
        </div>
      </div>
      {open &&
        <div ref={menuRef}>
          <Menu closeMenu={() => setOpen(false)} />
        </div>
      }
    </>
  );
}

export default Header;
