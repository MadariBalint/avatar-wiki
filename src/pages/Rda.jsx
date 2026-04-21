import { Link } from "react-router-dom";
import { useMemo } from "react";
import { motion } from "motion/react";

import CategoryBox from "../components/CategoryBox";
import InternalLink from "../components/InternalLink";

import { itemVariants, containerVariants } from "../utils/helpers";
import usePreloadImages from "../utils/usePreloadImages";
import Spinner from "../components/Spinner";

function Rda({ allData, ABC }) {
  const data = useMemo(() => {
    return allData.filter(
      (e) =>
        e.articleType === "rda" ||
        e.affiliations?.filter((el) => el.id === "rda").length > 0 ||
        e.residentIds?.filter((el) => el === "rda" || el === "human").length > 0
    );
  }, [allData]);

  const selectedData = useMemo(() => {
    const pageData = data.filter((el) => el.hasPage);
    if (!pageData.length) return [];

    const shuffled = [...pageData].sort(() => Math.random() - 0.5);
    return pageData.length <= 8 ? pageData : shuffled.slice(0, 8);
  }, [data]);

  const imagesReady = usePreloadImages(selectedData);

  return (
    <>
      {imagesReady && (
        <div>
          <div className="flex flex-col items-center gap-10">
            <span className="text-center font-[PapyrusWeb] text-3xl md:text-4xl lg:text-5xl">
              Everything about the RDA
            </span>
            <motion.div
              className="flex max-w-sm flex-wrap justify-center gap-2 md:max-w-lg md:gap-4 lg:max-w-3xl lg:gap-x-10 lg:gap-y-10 xl:max-w-5xl xl:gap-x-15 xl:gap-y-15"
              variants={containerVariants}
              initial="hidden"
              animate="show"
            >
              {selectedData.map((el) => (
                <motion.div key={el.id} variants={itemVariants}>
                  <Link to={`/${el.id}`}>
                    <CategoryBox identity={el} category={el.articleType} />
                  </Link>
                </motion.div>
              ))}
            </motion.div>
          </div>
          <div className="mx-auto mt-10 max-w-sm columns-2 rounded-xl bg-sky-900/20 px-7 py-10 md:max-w-md md:px-15 lg:max-w-xl xl:max-w-3xl">
            {ABC.map((letter) => {
              let arr = data.filter((x) =>
                x.name.toUpperCase().startsWith(letter)
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
                            <InternalLink href={el.id}>
                              <img
                                className="col-start-1 h-12 w-12 object-contain transition-all duration-250 hover:scale-105"
                                src={`/images/${el.articleType}/${el.articleType === "franchise" ? `${el.type}/` : ""}${el.id}${el.articleType === "characters" ? "-face" : ""}.webp`}
                                alt=""
                              />
                            </InternalLink>

                            <div className="col-span-full col-start-2 ml-2">
                              <Link
                                className="hover:underline"
                                to={`/${el.id}`}
                              >
                                {el.name}
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
      )}
    </>
  );
}

export default Rda;
