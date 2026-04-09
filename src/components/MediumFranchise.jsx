import FranchiseElement from "./FranchiseElement";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";

function MediumFranchise() {

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

  return (
    <>
      <div className="flex flex-col items-center">
        <div className="pt-8 font-[PapyrusWeb] text-3xl text-shadow-lg">
          Movies:
        </div>
        <div className="grid grid-cols-2 gap-y-5">
          {movies.map((movie, i) => {
            return (
              <Link
                key={movie.id}
                to={`/${movie.id}`}
                className={
                  i === movies.length - 1 && movies.length % 2 === 1
                    ? "col-span-2"
                    : ""
                }
              >
                <FranchiseElement
                  name={movie.id}
                  fullTitle={movie.title}
                  category="movies"
                />
              </Link>
            );
          })}
        </div>
        <div className="pt-8 font-[PapyrusWeb] text-3xl text-shadow-lg">
          Games:
        </div>
        <div className="grid grid-cols-2 gap-y-5">
          {games.map((game, i) => (
            <Link
              key={game.id}
              to={`/${game.id}`}
              className={
                i === games.length - 1 && games.length % 2 === 1
                  ? "col-span-2"
                  : ""
              }
            >
              <FranchiseElement
                name={game.id}
                fullTitle={game.title}
                category="games"
              />
            </Link>
          ))}
        </div>
        <div className="pt-8 font-[PapyrusWeb] text-3xl text-shadow-lg">
          Comics:
        </div>
        <div className="grid grid-cols-2 gap-y-5">
          {comics.map((comic, i) => (
            <Link
              key={comic.id}
              to={`/${comic.id}`}
              className={
                i === comics.length - 1 && comics.length % 2 === 1
                  ? "col-span-2"
                  : ""
              }
            >
              <FranchiseElement
                name={comic.id}
                fullTitle={comic.title}
                category="comics"
              />
            </Link>
          ))}
        </div>
        <div className="pt-8 font-[PapyrusWeb] text-3xl text-shadow-lg">
          Books:
        </div>
        <div className="grid grid-cols-2 gap-y-5">
          {books.map((book, i) => (
            <Link
              key={book.id}
              to={`/${book.id}`}
              className={
                i === books.length - 1 && books.length % 2 === 1
                  ? "col-span-2"
                  : ""
              }
            >
              <FranchiseElement
                name={book.id}
                fullTitle={book.title}
                category="books"
              />
            </Link>
          ))}
        </div>
      </div>
    </>
  );
}

export default MediumFranchise;
