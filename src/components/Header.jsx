import { useEffect, useMemo, useRef, useState } from "react";
import Menu from "./Menu";
import { MenuIcon, Search, X } from "lucide-react";
import { Link } from "react-router-dom";
import useLockBodyScroll from "../utils/useLockBodyScroll";

import logo from "../assets/logo.webp";

function Header({ allData, isScrolled }) {
  const [query, setQuery] = useState("");
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [isInFocus, setIsInFocus] = useState(false)
  const [open, setOpen] = useState(false);
  const [openSearch, setOpenSearch] = useState(false)
  const menuRef = useRef(null);



  const searchRef = useRef(null);

  const searchRecords = useMemo(() => {
    return allData.map((entry) => {
      const label =
        entry.title ||
        entry.name ||
        entry.humanName ||
        entry.naviName ||
        "Untitled";

      const type = entry.articleType || entry.type || "article";

      const searchableText = [
        entry.title,
        entry.name,
        entry.humanName,
        entry.naviName,
        entry.id,
        type,
      ]
        .filter(Boolean)
        .join(" ")
        .toLowerCase();

      const hasPage = entry.hasPage

      return {
        id: entry.id,
        label,
        type,
        searchableText,
        hasPage
      };
    });
  }, [allData]);

  const filteredResults = useMemo(() => {
    const trimmedQuery = query.trim().toLowerCase();

    if (!trimmedQuery) return [];


    const exactMatches = [];
    const startsWithMatches = [];
    const includesMatches = [];

    for (const record of searchRecords) {
      const labelLower = record.label.toLowerCase();
      const id = record.id.toLowerCase();
      const type = record.type.toLowerCase();


      if (
        labelLower === trimmedQuery ||
        id === trimmedQuery ||
        type === trimmedQuery || labelLower.replace(":", "") === trimmedQuery
      ) {
        record.hasPage && exactMatches.push(record);
      } else if (
        labelLower.startsWith(trimmedQuery) ||
        id.startsWith(trimmedQuery) ||
        type.startsWith(trimmedQuery) || labelLower.replace(":", "").startsWith(trimmedQuery)
      ) {
        record.hasPage && startsWithMatches.push(record);
      } else if (
        labelLower.includes(trimmedQuery) ||
        id.includes(trimmedQuery) ||
        type.includes(trimmedQuery) || labelLower.replace(":", "").includes(trimmedQuery)
      ) {
        record.hasPage && includesMatches.push(record);
      }
    }

    return [...exactMatches, ...startsWithMatches, ...includesMatches].slice(
      0,
      6
    );
  }, [query, searchRecords]);




  useEffect(() => {
    function handleClickOutside(event) {

      if (menuRef.current && !menuRef.current.contains(event.target)) {
        setOpen(false);
      }
    }

    if (open) {
      document.addEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [open]);
  useLockBodyScroll(open);

  return (
    <nav className="sticky top-0 z-50 ">
      <div className={`flex flex-row w-full h-32 md:h-24 lg:h-20 transition-all duration-300  items-center justify-between bg-sky-100 `}>
        <div className="h-full max-w-[50%] md:max-w-[30%]">
          <Link to="/">
            <img
              src={logo}
              alt="logo"
              className="h-full max-h-full w-auto object-contain drop-shadow-[0_-3px_3px_rgba(0,0,0,0.35)] md:ml-3 lg:ml-10"
            />
          </Link>
        </div>
        <div className="mr-12 ml-auto flex flex-row gap-5 md:hidden">
          <button onClick={() => setOpenSearch((prev) => !prev)}>
            {openSearch && !open ? <X /> : <Search />}
          </button>
          <button

            onClick={() => setOpen((prev) => !prev)}
          >
            {open ? <X /> : <MenuIcon />}
          </button>

        </div>



        <div className="hidden md:block md:flex md:gap-5 md:grow md:justify-end ">
          <div ref={searchRef} className="relative grow">
            <input
              type="text"
              value={query}
              placeholder="Search the wiki..."
              onChange={(e) => {
                const value = e.target.value;
                setQuery(value);
                setIsSearchOpen(value.trim().length > 0);
              }}
              onFocus={() => {
                setIsInFocus(true)
                if (query.trim()) setIsSearchOpen(true);
              }}
              onBlur={() => {
                setIsInFocus(false)
              }}
              className={`w-full px-3 py-1 border border-2 outline-none ${isInFocus === true ? "focus:border-sky-600/70" : "border-sky-600/10"} ${isSearchOpen === false ? "rounded-lg" : "rounded-t-lg"}`}
            />
            {isSearchOpen && query.trim() && (
              <div className={`absolute left-0 top-full px-3 py-1 border border-2 border-t-0 outline-none ${isInFocus === true ? "border-sky-600/70" : "border-sky-600/10"} rounded-b-lg w-full bg-sky-100`}>
                {filteredResults.length > 0 ? (
                  filteredResults.map((result) => (
                    <Link
                      key={result.id}
                      to={`/${result.id}`}
                      onClick={() => {
                        setQuery("");
                        setIsSearchOpen(false);
                      }}
                    >
                      <div>{result.label}</div>
                      <small>{result.type}</small>
                    </Link>
                  ))
                ) : (
                  <div>No results found</div>
                )}
              </div>
            )}
          </div>
          <Menu />
        </div>
      </div>
      {open && (
        <div ref={menuRef} className="md:hidden bg-sky-100 grow">
          <Menu closeMenu={() => setOpen(false)} />
        </div>
      )}
      {openSearch && !open && (
        <div ref={searchRef} className="grow md:hidden h-full bg-sky-100 mb-5">
          <div className="relative mx-15 ">
            <input
              type="text"
              value={query}
              placeholder="Search the wiki..."
              onChange={(e) => {
                const value = e.target.value;
                setQuery(value);
                setIsSearchOpen(value.trim().length > 0);
              }}
              onFocus={() => {
                setIsInFocus(true)
                if (query.trim()) setIsSearchOpen(true);
              }}
              onBlur={() => {
                setIsInFocus(false)
              }}
              className={`w-full px-3 py-1 border border-2 outline-none ${isInFocus === true ? "focus:border-sky-600/70" : "border-sky-600/10"} ${isSearchOpen === false ? "rounded-lg" : "rounded-t-lg"}`}
            />
            {isSearchOpen && query.trim() && (
              <div className={`absolute left-0 top-full  px-3 py-1 border border-2 border-t-0 outline-none ${isInFocus === true ? "border-sky-600/70" : "border-sky-600/10"} rounded-b-lg w-full bg-sky-100`}>
                {filteredResults.length > 0 ? (
                  filteredResults.map((result) => (
                    <Link
                      key={result.id}
                      to={`/${result.id}`}
                      onClick={() => {
                        setQuery("");
                        setIsSearchOpen(false);
                        setOpenSearch(false)
                      }}
                    >
                      <div>{result.label}</div>
                      <small>{result.type}</small>
                    </Link>
                  ))
                ) : (
                  <div>No results found</div>
                )}
              </div>
            )}

          </div>

        </div>
      )}
    </nav>
  );
}

export default Header;
