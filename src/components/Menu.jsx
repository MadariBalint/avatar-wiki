import { Link } from "react-router-dom";

function Menu({closeMenu}) {
  return (
    <nav className="mb-10 flex flex-col items-center gap-10 md:mr-5 md:flex-row lg:mr-10">
      <Link onClick={closeMenu} to="/">Home</Link>
      <Link onClick={closeMenu} to="/category:characters">Characters</Link>
      <Link onClick={closeMenu} to="/category:navi">Na'vi</Link>
      <Link onClick={closeMenu} to="/category:rda">RDA</Link>
      <Link onClick={closeMenu} to="/category:flora">Flora</Link>
      <Link onClick={closeMenu} to="/category:fauna">Fauna</Link>
    </nav>
  );
}

export default Menu;
