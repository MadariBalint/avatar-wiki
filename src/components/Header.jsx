import { useEffect, useMemo, useRef, useState } from "react";
import Menu from "./Menu";
import { MenuIcon, X } from "lucide-react";
import { Link } from "react-router-dom";
import useLockBodyScroll from "../utils/useLockBodyScroll";

import logo from "../assets/logo.webp";

function Header({ allData }) {
  const [query, setQuery] = useState("");
  const [isSearchOpen, setIsSearchOpen] = useState(false);

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

      return {
        id: entry.id,
        label,
        type,
        searchableText,
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
        type === trimmedQuery
      ) {
        exactMatches.push(record);
      } else if (
        labelLower.startsWith(trimmedQuery) ||
        id.startsWith(trimmedQuery) ||
        type.startsWith(trimmedQuery)
      ) {
        startsWithMatches.push(record);
      } else if (
        labelLower.includes(trimmedQuery) ||
        id.includes(trimmedQuery) ||
        type.includes(trimmedQuery)
      ) {
        includesMatches.push(record);
      }
    }

    return [...exactMatches, ...startsWithMatches, ...includesMatches].slice(
      0,
      6
    );
  }, [query, searchRecords]);

  const [open, setOpen] = useState(false);
  const menuRef = useRef(null);

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
          onClick={() => setOpen((prev) => !prev)}
        >
          {open ? <X /> : <MenuIcon />}
        </button>

        <div className="hidden md:block md:flex md:gap-5">
          <div ref={searchRef} className="">
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
                if (query.trim()) setIsSearchOpen(true);
              }}
            />
            {isSearchOpen && query.trim() && (
              <div>
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
        <div ref={menuRef}>
          <Menu closeMenu={() => setOpen(false)} />
        </div>
      )}
    </>
  );
}

export default Header;
