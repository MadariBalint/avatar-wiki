import { Children, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { AnimatePresence } from "motion/react";

import FranchiseElement from "./FranchiseElement";
import FadeEffectOuter from "./FadeEffectOuter";
import FadeEffectInner from "./FadeEffectInner";

function LargeFranchise() {
  const [franchise, setFranchise] = useState([]);

  useEffect(() => {
    async function loadFranchise() {
      try {
        const res = await fetch("data/franchise.json");
        const response = await res.json();

        setFranchise(response);
      } catch (err) {
        console.error("Failed to load data", err);
      }
    }

    loadFranchise();
  }, []);

  const movies = franchise.filter((el) => el.type === "movies");
  const games = franchise.filter((el) => el.type === "games");
  const comics = franchise.filter((el) => el.type === "comics");
  const books = franchise.filter((el) => el.type === "books");

  const [active, setActive] = useState("movies");
  function handleClick(value) {
    setActive(value);
  }
  return (
    <>
      <div className="mx-10 mt-10 flex flex-row justify-start gap-x-0 rounded-xl bg-sky-400/20 p-2 shadow-lg">
        <button
          className={`mx-3 rounded-md px-2 py-1 shadow-xs shadow-sky-900/40 transition-all duration-150 ${active === "movies" ? "bg-sky-600/30" : "hover:scale-105 hover:bg-sky-500/20"}`}
          onClick={() => handleClick("movies")}
        >
          Movies
        </button>
        <button
          className={`mx-3 rounded-md px-2 py-1 shadow-xs shadow-sky-900/40 transition-all duration-150 ${active === "games" ? "bg-sky-600/30" : "hover:scale-105 hover:bg-sky-500/20"}`}
          onClick={() => handleClick("games")}
        >
          Games
        </button>
        <button
          className={`mx-3 rounded-md px-2 py-1 shadow-xs shadow-sky-900/40 transition-all duration-150 ${active === "comics" ? "bg-sky-600/30" : "hover:scale-105 hover:bg-sky-500/20"}`}
          onClick={() => handleClick("comics")}
        >
          Comics
        </button>
        <button
          className={`mx-3 rounded-md px-2 py-1 shadow-xs shadow-sky-900/40 transition-all duration-150 ${active === "books" ? "bg-sky-600/30" : "hover:scale-105 hover:bg-sky-500/20"}`}
          onClick={() => handleClick("books")}
        >
          Books
        </button>
      </div>
      <AnimatePresence mode="wait">
        {active === "movies" && (
          <FadeEffectOuter
            key="movies"
            className={"flex flex-row flex-wrap justify-center py-6"}
          >
            {movies.map((movie) => {
              return (
                <FadeEffectInner key={movie.id}>
                  <Link
                    className="block transition-all duration-150 hover:scale-105"
                    to={`/${movie.id}`}
                  >
                    <FranchiseElement
                      name={movie.id}
                      fullTitle={movie.title}
                      category="movies"
                    />
                  </Link>
                </FadeEffectInner>
              );
            })}
          </FadeEffectOuter>
        )}
        {active === "games" && (
          <FadeEffectOuter
            key="games"
            className="flex flex-row flex-wrap justify-center py-6"
          >
            {games.map((game) => {
              return (
                <FadeEffectInner key={game.id}>
                  <Link
                    className="block transition-all duration-150 hover:scale-105"
                    to={`/${game.id}`}
                  >
                    <FranchiseElement
                      name={game.id}
                      fullTitle={game.title}
                      category="games"
                    />
                  </Link>
                </FadeEffectInner>
              );
            })}
          </FadeEffectOuter>
        )}

        {active === "comics" && (
          <FadeEffectOuter
            key="comics"
            className="flex flex-row flex-wrap justify-center py-6"
          >
            {comics.map((comic) => {
              return (
                <FadeEffectInner key={comic.id}>
                  <Link
                    className="block transition-all duration-150 hover:scale-105"
                    to={`/${comic.id}`}
                  >
                    <FranchiseElement
                      name={comic.id}
                      fullTitle={comic.title}
                      category="comics"
                    />
                  </Link>
                </FadeEffectInner>
              );
            })}
          </FadeEffectOuter>
        )}
        {active === "books" ? (
          <FadeEffectOuter
            key="books"
            className="flex flex-row flex-wrap justify-center py-6"
          >
            {books.map((book) => {
              return (
                <FadeEffectInner key={book.id}>
                  <Link
                    className="block transition-all duration-150 hover:scale-105"
                    to={`/${book.id}`}
                  >
                    <FranchiseElement
                      name={book.id}
                      fullTitle={book.title}
                      category="books"
                    />
                  </Link>
                </FadeEffectInner>
              );
            })}
          </FadeEffectOuter>
        ) : (
          ""
        )}
      </AnimatePresence>
    </>
  );
}

export default LargeFranchise;
