import { useEffect, useMemo, useState } from "react";
import Spinner from "../components/Spinner";
import { Link } from "react-router-dom";
import CategoryBox from "../components/CategoryBox";

function Vehicles({ ABC }) {
  const [data, setData] = useState([]);

  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function loadHumans() {
      setLoading(true);
      try {
        const res = await fetch("data/rda.json");
        let response = await res.json();

        response = response
          .filter((x) => x.categories?.includes("vehicle"))
          .map((item) => ({ ...item, articleType: "rda" }));

        setData(response);
      } catch (err) {
        console.error("Failed to load data", err);
      } finally {
        setLoading(false);
      }
    }

    loadHumans();
  }, []);

  const selectedData = useMemo(() => {
    if (!data.length) return [];
    const shuffled = [...data].sort(() => Math.random() - 0.5);
    return data.length <= 8 ? data : shuffled.slice(0, 8);
  }, [data]);

  if (loading) {
    return (
      <div className="flex h-svh items-center justify-center gap-3 font-[PapyrusWeb] text-6xl">
        <Spinner />
        <span>Loading...</span>
      </div>
    );
  }
  return (
    <div>
      <div className="flex flex-col items-center gap-10">
        <span className="text-center font-[PapyrusWeb] text-3xl md:text-4xl lg:text-5xl">
          Different vehicles used by the RDA
        </span>
        <div className="flex max-w-sm flex-wrap justify-center gap-2 md:max-w-lg md:gap-4 lg:max-w-3xl lg:gap-x-10 lg:gap-y-10 xl:max-w-5xl xl:gap-x-15 xl:gap-y-15">
          {selectedData.map(
            (el) =>
              el.hasPage && (
                <Link key={el.id} to={`/${el.id}`}>
                  <CategoryBox identity={el} category={el.articleType} />
                </Link>
              )
          )}
        </div>
      </div>
      <div className="mx-auto mt-10 max-w-sm columns-2 rounded-xl bg-sky-900/20 px-7 py-10 md:max-w-md md:px-15 lg:max-w-xl xl:max-w-3xl">
        {ABC.map((letter) => {
          let arr = data.filter((x) => x.name.toUpperCase().startsWith(letter));
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
                          src={`/images/${el.articleType}/${el.articleType === "franchise" ? `${el.type}/` : ""}${el.id}${el.articleType === "characters" ? "-face" : ""}.webp`}
                          alt=""
                        />

                        <div className="col-span-full col-start-2 ml-2">
                          <Link to={`/${el.id}`}>{el.name}</Link>
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

export default Vehicles;
