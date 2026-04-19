import { Link } from "react-router-dom";
import { motion } from "motion/react";
import { useEffect, useMemo, useState } from "react";

import CategoryBox from "../components/CategoryBox";
import Spinner from "../components/Spinner";
import InternalLink from "../components/InternalLink";

import usePreloadImages from "../utils/usePreloadImages";
import { containerVariants, itemVariants } from "../utils/helpers";

function Characters({ ABC }) {
  const [characters, setCharacters] = useState([]);

  const [loading, setLoading] = useState(true);

  const selectedData = useMemo(() => {
    if (!characters.length) return [];
    const shuffled = [...characters].sort(() => Math.random() - 0.5);
    return characters.length <= 8 ? characters : shuffled.slice(0, 8);
  }, [characters]);

  const imagesReady = usePreloadImages(selectedData);

  useEffect(() => {
    async function loadCharacters() {
      setLoading(true);
      try {
        const res = await fetch("data/characters.json");
        let response = await res.json();

        response = response.filter((x) => x.hasPage);

        setCharacters(response);
      } catch (err) {
        console.error("Failed to load data", err);
      } finally {
        setLoading(false);
      }
    }

    loadCharacters();
  }, []);

  if (loading) {
    return (
      <div className="flex h-svh items-center justify-center gap-3 font-[PapyrusWeb] text-6xl">
        <Spinner />
        <span>Loading...</span>
      </div>
    );
  }

  return (
    <>
      <div className="flex flex-col items-center gap-10">
        <span className="text-center font-[PapyrusWeb] text-3xl md:text-4xl lg:text-5xl">
          Characters of the Avatar universe
        </span>
        <motion.div
          className="flex max-w-sm flex-wrap justify-center gap-2 md:max-w-lg md:gap-4 lg:max-w-3xl lg:gap-x-10 lg:gap-y-10 xl:max-w-5xl xl:gap-x-15 xl:gap-y-15"
          variants={containerVariants}
          initial="hidden"
          animate={imagesReady ? "show" : "hidden"}
        >
          {selectedData.map((el) => (
            <motion.div key={el.id} variants={itemVariants}>
              <Link to={`/${el.id}`}>
                <CategoryBox identity={el} category="characters" />
              </Link>
            </motion.div>
          ))}
        </motion.div>
      </div>
      <div className="mx-auto mt-10 max-w-sm columns-2 rounded-xl bg-sky-900/20 px-7 py-10 md:max-w-md md:px-15 lg:max-w-xl xl:max-w-3xl">
        {ABC.map((letter) => {
          let arr = characters.filter((x) =>
            x.name.toUpperCase().startsWith(letter)
          );
          if (arr.length < 1) return;
          return (
            <div className="mb-5" key={letter}>
              <span className="font-[PapyrusWeb] text-3xl">{letter}</span>
              <div className="ml-5 flex flex-col gap-1 md:ml-10">
                {arr.map((el) => {
                  return (
                    <div className="grid grid-cols-4 items-center" key={el.id}>
                      <div>
                        <InternalLink href={el.id}>
                          <img
                            className="col-start-1 h-12 w-12 object-contain transition-all duration-250 hover:scale-105"
                            src={`/images/characters/${el.id}-face.webp`}
                            alt=""
                          />
                        </InternalLink>
                      </div>

                      <div className="col-span-full col-start-2 ml-2">
                        <Link className="hover:underline" to={`/${el.id}`}>
                          {el.name}
                        </Link>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          );
        })}
      </div>
    </>
  );
}

export default Characters;
