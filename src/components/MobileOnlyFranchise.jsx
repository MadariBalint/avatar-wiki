import FranchiseElement from "./FranchiseElement";
import franchise from "../data/franchise.json";
import { Link } from "react-router-dom";

function MobileOnlyFranchise() {
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
        {movies.map((movie) => (
          <Link key={movie.id} to={`/${movie.id}`}>
            <FranchiseElement
              name={movie.id}
              fullTitle={movie.title}
              category="movies"
            />
          </Link>
        ))}
        <div className="pt-8 font-[PapyrusWeb] text-3xl text-shadow-lg">
          Games:
        </div>
        {games.map((game) => (
          <Link key={game.id} to={`/${game.id}`}>
            <FranchiseElement
              name={game.id}
              fullTitle={game.title}
              category="games"
            />
          </Link>
        ))}
        <div className="pt-8 font-[PapyrusWeb] text-3xl text-shadow-lg">
          Comics:
        </div>
        {comics.map((comic) => (
          <Link key={comic.id} to={`/${comic.id}`}>
            <FranchiseElement
              name={comic.id}
              fullTitle={comic.title}
              category="comics"
            />
          </Link>
        ))}
        <div className="pt-8 font-[PapyrusWeb] text-3xl text-shadow-lg">
          Books:
        </div>
        {books.map((book) => (
          <Link key={book.id} to={`/${book.id}`}>
            <FranchiseElement
              name={book.id}
              fullTitle={book.title}
              category="books"
            />
          </Link>
        ))}
      </div>
    </>
  );
}

export default MobileOnlyFranchise;
