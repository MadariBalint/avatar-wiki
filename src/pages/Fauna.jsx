import { Link } from "react-router-dom";
import CategoryBox from "../components/CategoryBox";
import { useEffect, useMemo, useState } from "react";
import Spinner from "../components/Spinner";

function Fauna({ ABC }) {
  const [fauna, setFauna] = useState([]);

  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function loadFauna() {
      setLoading(true);
      try {
        const res = await fetch("data/fauna.json");
        const response = await res.json();

        setFauna(response);
      } catch (err) {
        console.error("Failed to load fauna", err);
      } finally {
        setLoading(false);
      }
    }

    loadFauna();
  }, []);

  const selectedData = useMemo(() => {
    if (!fauna.length) return [];
    const shuffled = [...fauna].sort(() => Math.random() - 0.5);
    return fauna.length <= 8 ? fauna : shuffled.slice(0, 8);
  }, [fauna]);

  if (loading) {
    return (
      <div className="h-svh flex justify-center items-center gap-3 font-[PapyrusWeb] text-6xl">
        <Spinner />
        <span>Loading...</span>
      </div>
    );
  }

  return (
    <div>
      <div className="flex flex-col items-center gap-10">
        <span className="text-center font-[PapyrusWeb] text-3xl md:text-4xl lg:text-5xl">
          Fauna of Pandora
        </span>
        <div className="flex max-w-sm flex-wrap justify-center gap-2 md:max-w-lg md:gap-4 lg:max-w-3xl lg:gap-x-10 lg:gap-y-10 xl:max-w-5xl xl:gap-x-15 xl:gap-y-15">
          {selectedData.map(
            (el) =>
              el.hasPage && (
                <Link key={el.id} to={`/${el.id}`}>
                  <CategoryBox identity={el} category="fauna" />
                </Link>
              )
          )}
        </div>
      </div>
      ;
      <div className="mx-auto mt-10 max-w-sm columns-2 rounded-xl bg-sky-900/20 px-7 py-10 md:max-w-md md:px-15 lg:max-w-xl xl:max-w-3xl">
        {ABC.map((letter) => {
          let arr = fauna.filter(
            (x) =>
              x.humanName?.toUpperCase().startsWith(letter) ||
              x.naviName?.toUpperCase().startsWith(letter)
          );
          if (arr.length < 1) return;
          if (arr.find((el) => el.hasPage) === undefined) return;

          return (
            <div className="mb-5" key={letter}>
              <span className="font-[PapyrusWeb] text-3xl">{letter}</span>
              <div className="ml-5 flex flex-col gap-1 md:ml-10">
                {arr.map((el) => {
                  return (
                    el.hasPage && (
                      <div
                        className="grid grid-cols-4 items-center"
                        key={el.id}
                      >
                        <img
                          className="col-start-1 h-12 w-12 object-contain"
                          src={`/images/fauna/${el.id}.png`}
                          alt=""
                        />

                        <div className="col-span-full col-start-2 ml-2">
                          <Link to={`/${el.id}`}>
                            {el.humanName || el.naviName}
                          </Link>
                        </div>
                      </div>
                    )
                  );
                })}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Fauna;
