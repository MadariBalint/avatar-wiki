
import { Link } from "react-router-dom";

function Menu({ closeMenu }) {
  return (
    <nav className="mb-10 flex flex-col items-center gap-5 md:py-1 md:mb-0 md:mr-5 md:flex-row lg:mr-10">
      <Link className=" px-5 py-1 transition-all duration-200 hover:bg-sky-600/20 hover:rounded-md hover:shadow-md" onClick={closeMenu} to="/">Home</Link>
      <Link className=" px-5 py-1 transition-all duration-200 hover:bg-sky-600/20 hover:rounded-md hover:shadow-md" onClick={closeMenu} to="/category:characters">Characters</Link>
      <Link className=" px-5 py-1 transition-all duration-200 hover:bg-sky-600/20 hover:rounded-md hover:shadow-md" onClick={closeMenu} to="/category:navi">Na'vi</Link>
      <Link className=" px-5 py-1 transition-all duration-200 hover:bg-sky-600/20 hover:rounded-md hover:shadow-md" onClick={closeMenu} to="/category:rda">RDA</Link>
      <Link className=" px-5 py-1 transition-all duration-200 hover:bg-sky-600/20 hover:rounded-md hover:shadow-md" onClick={closeMenu} to="/category:flora">Flora</Link>
      <Link className=" px-5 py-1 transition-all duration-200 hover:bg-sky-600/20 hover:rounded-md hover:shadow-md" onClick={closeMenu} to="/category:fauna">Fauna</Link>
    </nav>
  );
}

export default Menu;
