import { useEffect, useState } from "react";

import FranchiseElement from "./FranchiseElement";
import { Link } from "react-router-dom";

function LargeFranchise() {
  const [franchise,setFranchise] = useState([])

  useEffect(()=>{

    async function loadFranchise(){
      try {
        const res = await fetch("data/franchise.json")
        const response = await res.json()

        setFranchise(response)
      } catch (err) {
        console.error("Failed to load data", err)
      } finally {
      }
    }

    loadFranchise()
  },[])


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
          className={`mx-3 rounded-md px-2 py-1 shadow-xs shadow-sky-900/40 ${active === "movies" ? "bg-sky-500/30" : ""}`}
          onClick={() => handleClick("movies")}
        >
          Movies
        </button>
        <button
          className={`mx-3 rounded-md px-2 py-1 shadow-xs shadow-sky-900/40 ${active === "games" ? "bg-sky-500/30" : ""}`}
          onClick={() => handleClick("games")}
        >
          Games
        </button>
        <button
          className={`mx-3 rounded-md px-2 py-1 shadow-xs shadow-sky-900/40 ${active === "comics" ? "bg-sky-500/30" : ""}`}
          onClick={() => handleClick("comics")}
        >
          Comics
        </button>
        <button
          className={`mx-3 rounded-md px-2 py-1 shadow-xs shadow-sky-900/40 ${active === "books" ? "bg-sky-500/30" : ""}`}
          onClick={() => handleClick("books")}
        >
          Books
        </button>
      </div>
      {active === "movies" ? (
        <div className="flex flex-row flex-wrap justify-center py-6">
          {movies.map((movie) => {
            return (
              <Link key={movie.id} to={`/${movie.id}`}>
                <FranchiseElement
                  name={movie.id}
                  fullTitle={movie.title}
                  category="movies"
                />
              </Link>
            );
          })}
        </div>
      ) : (
        ""
      )}
      {active === "games" ? (
        <div className="flex flex-row flex-wrap justify-center py-6">
          {games.map((game) => {
            return (
              <Link key={game.id} to={`/${game.id}`}>
                <FranchiseElement
                  name={game.id}
                  fullTitle={game.title}
                  category="games"
                />
              </Link>
            );
          })}
        </div>
      ) : (
        ""
      )}
      {active === "comics" ? (
        <div className="flex flex-row flex-wrap justify-center py-6">
          {comics.map((comic) => {
            return (
              <Link key={comic.id} to={`/${comic.id}`}>
                <FranchiseElement
                  name={comic.id}
                  fullTitle={comic.title}
                  category="comics"
                />
              </Link>
            );
          })}
        </div>
      ) : (
        ""
      )}
      {active === "books" ? (
        <div className="flex flex-row flex-wrap justify-center py-6">
          {books.map((book) => {
            return (
              <Link key={book.id} to={`/${book.id}`}>
                <FranchiseElement
                  name={book.id}
                  fullTitle={book.title}
                  category="books"
                />
              </Link>
            );
          })}
        </div>
      ) : (
        ""
      )}
    </>
  );
}

export default LargeFranchise;
