import FranchiseInfoBoxRow from "./FranchiseInfoBoxRow";

function FranchiseInfoBox({ data = null }) {
  return (
    <aside className="w-80 flex flex-col items-center">
      <div className="flex justify-center text-xl mt-2 mb-1 border p-2 rounded-2xl border-sky-600 bg-sky-800/40">
        <h2 >{data.title}</h2>
      </div>
      <div>
        <img
        className="rounded-2xl"
          src={`/images/franchise/${data.type}/${data.id}-poster.png`}
          alt={`${data.id}-poster`}
        />
      </div>
      <div className="border-2  border-sky-400 rounded-2xl mt-1 p-2 divid-solid divide-y-2 divide-sky-400">

      <div className="flex justify-center text-lg bg-sky-700/30 rounded-t-xl ">Information</div>
      <div className="divide-y-1 divide-sky-400 space-y-2 " >
        {/* {Object.entries(data).map((el, i) =>
          el[0] !== "id" ? (
            <div key={i} className="grid grid-cols-2">
              <div className="capitalize">{el[0]}</div>
              <div className="flex flex-col">
              {typeof el[1] === "object" ? (
                el[1].map((item, i) => (
                  <div
                      key={`${data.id}${el[0]}${i}`}
                      data-id={`${data.id}${el[0]}${i}`}
                      >
                      {el[1].length > 1 && <span>&bull;</span>}
                      {item}
                      </div>
                      ))
                      ) : (
                  <div>{el[1]}</div>
                  )}
                  </div>
            </div>
            ) : (
              ""
              )
              )} */}
        {/* director,producer,writer,actors,composer,studio,runtime is for movies */}
        {data.director && (
          <FranchiseInfoBoxRow label={"Director"} info={data.director} />
        )}
        {data.producer && (
          <FranchiseInfoBoxRow label={"Producer"} info={data.producer} />
        )}
        {data.writer && (
          <FranchiseInfoBoxRow label={"Writer"} info={data.writer} />
        )}
        {data.actors && (
          <FranchiseInfoBoxRow label={"Actors"} info={data.actors} />
        )}
        {data.composer && (
          <FranchiseInfoBoxRow label={"Composer"} info={data.composer} />
        )}
        {data.studio && (
          <FranchiseInfoBoxRow label={"Studio"} info={data.studio} />
        )}
        {data["run-time"] && (
          <FranchiseInfoBoxRow label={"Run time"} info={data["run-time"]} />
        )}
        {/* developer, platform is for games */}
        {data.developer && (
          <FranchiseInfoBoxRow label={"Developer"} info={data.developer} />
        )}
        {/* author,country, genre, publisher,pages, issues is for books and comics */}
        {data.author && (
          <FranchiseInfoBoxRow label={"Author"} info={data.author} />
        )}
        {data.country && (
          <FranchiseInfoBoxRow label={"Country"} info={data.country} />
        )}
        {data.publisher && (
          <FranchiseInfoBoxRow label={"Publisher"} info={data.publisher} />
        )}
        {data.genre && (
          <FranchiseInfoBoxRow label={"Genre"} info={data.genre} />
        )}
        {data.issues && (
          <FranchiseInfoBoxRow label={"Issues"} info={data.issues} />
        )}
        {data.pages && (
          <FranchiseInfoBoxRow label={"Pages"} info={data.pages} />
        )}

        {data.platform && (
          <FranchiseInfoBoxRow label={"Platform"} info={data.platform} />
        )}

        {data.lang && (
          <FranchiseInfoBoxRow label={"Language"} info={data.lang} />
        )}
        {data["release-date"] && (
          <FranchiseInfoBoxRow
          label={"Release date"}
          info={data["release-date"]}
          />
        )}
        {data.release && (
          <FranchiseInfoBoxRow label={"Release date"} info={data.release} />
        )}
      </div>
        </div>
    </aside>
  );
}

export default FranchiseInfoBox;
