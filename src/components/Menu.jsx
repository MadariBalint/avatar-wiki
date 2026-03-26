import { Link } from "react-router-dom";

function Menu() {
  return (
    <nav className="mb-10 flex flex-col items-center gap-10 md:mr-5 md:flex-row lg:mr-10">
      <Link to="/">Home</Link>
      <Link to="/category:characters">Characters</Link>
      <Link to="/category:navi">Na'vi</Link>
      <Link to="/category:rda">RDA</Link>
      <Link to="/category:flora">Flora</Link>
      <Link to="/category:fauna">Fauna</Link>
    </nav>
  );
}

export default Menu;
