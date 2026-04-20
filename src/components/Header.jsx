import { useEffect, useMemo, useRef, useState } from "react";
import Menu from "./Menu";
import { MenuIcon, Search, X } from "lucide-react";
import { Link, useLocation } from "react-router-dom";
import useLockBodyScroll from "../utils/useLockBodyScroll";

import logo from "../assets/logo.webp";

function Header({ allData }) {
  const [query, setQuery] = useState("");
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [isInFocus, setIsInFocus] = useState(false);
  const [open, setOpen] = useState(false);
  const [openSearch, setOpenSearch] = useState(false);
  const menuRef = useRef(null);
  const location = useLocation();
  const isMedium = 768 < window.innerWidth < 1024;

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

      const hasPage = entry.hasPage;

      return {
        id: entry.id,
        label,
        type,
        searchableText,
        hasPage,
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
        type === trimmedQuery ||
        labelLower.replace(":", "") === trimmedQuery
      ) {
        record.hasPage && exactMatches.push(record);
      } else if (
        labelLower.startsWith(trimmedQuery) ||
        id.startsWith(trimmedQuery) ||
        type.startsWith(trimmedQuery) ||
        labelLower.replace(":", "").startsWith(trimmedQuery)
      ) {
        record.hasPage && startsWithMatches.push(record);
      } else if (
        labelLower.includes(trimmedQuery) ||
        id.includes(trimmedQuery) ||
        type.includes(trimmedQuery) ||
        labelLower.replace(":", "").includes(trimmedQuery)
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

  useEffect(() => {
    setOpenSearch(false);
    setIsSearchOpen(false);
    setQuery("");
    setIsInFocus(false);
  }, [location.pathname]);

  useEffect(() => {
    if (!openSearch) {
      setIsSearchOpen(false);
      setQuery("");
      setIsInFocus(false);
    }
  }, [openSearch]);

  return (
    <nav className="sticky top-0 z-50 flex w-full flex-col">
      <div className="relative">
        <div
          className={`flex h-32 w-full flex-row items-center justify-between bg-sky-100 transition-all duration-300 md:h-24 lg:h-20`}
        >
          <div className="h-full max-w-[50%] md:max-w-[30%]">
            <Link to="/">
              <img
                src={logo}
                alt="logo"
                className="h-full max-h-full w-auto object-contain drop-shadow-[0_-3px_3px_rgba(0,0,0,0.35)] md:ml-3 lg:ml-10"
              />
            </Link>
          </div>
          <div className="mr-12 ml-auto flex flex-row gap-3 lg:hidden">
            <button
              className="p-2"
              onClick={() => setOpenSearch((prev) => !prev)}
            >
              {openSearch && !open ? <X /> : <Search />}
            </button>
            <button className="p-2" onClick={() => setOpen((prev) => !prev)}>
              {open ? <X /> : <MenuIcon />}
            </button>
          </div>

          <div className="hidden lg:block lg:flex lg:grow lg:justify-end lg:gap-5">
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
                  setIsInFocus(true);
                  if (query.trim()) setIsSearchOpen(true);
                }}
                onBlur={() => {
                  setIsInFocus(false);
                }}
                className={`w-full border border-2 px-3 py-1 outline-none ${isInFocus === true ? "focus:border-sky-600/70" : "border-sky-600/10"} ${isSearchOpen === false ? "rounded-lg" : "rounded-t-lg"}`}
              />
              {isSearchOpen && query.trim() && (
                <div
                  className={`absolute top-full left-0 border border-2 border-t-0 px-3 py-1 outline-none ${isInFocus === true ? "border-sky-600/70" : "border-sky-600/10"} w-full rounded-b-lg bg-sky-100`}
                >
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
          <div
            ref={menuRef}
            className="absolute top-full left-0 w-full grow bg-sky-100 pt-5 lg:hidden"
          >
            <Menu closeMenu={() => setOpen(false)} />
          </div>
        )}
        {openSearch && !open && (
          <div
            ref={searchRef}
            className="absolute top-full left-0 w-full bg-sky-100 pt-5 pb-5 lg:hidden"
          >
            <div className="relative mx-15">
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
                  setIsInFocus(true);
                  if (query.trim()) setIsSearchOpen(true);
                }}
                onBlur={() => {
                  setIsInFocus(false);
                }}
                className={`w-full border border-2 px-3 py-1 outline-none ${isInFocus === true ? "focus:border-sky-600/70" : "border-sky-600/10"} ${isSearchOpen === false ? "rounded-lg" : "rounded-t-lg"}`}
              />
              {isSearchOpen && query.trim() && (
                <div
                  className={`absolute top-full left-0 border border-2 border-t-0 px-3 py-1 outline-none ${isInFocus === true ? "border-sky-600/70" : "border-sky-600/10"} w-full rounded-b-lg bg-sky-100`}
                >
                  {filteredResults.length > 0 ? (
                    filteredResults.map((result) => (
                      <Link
                        key={result.id}
                        to={`/${result.id}`}
                        onClick={() => {
                          setQuery("");
                          setIsSearchOpen(false);
                          setOpenSearch(false);
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
      </div>
    </nav>
  );
}

export default Header;
