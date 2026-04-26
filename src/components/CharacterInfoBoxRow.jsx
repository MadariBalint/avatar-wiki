function CharacterInfoBoxRow({ label, info, renderInfo, allData, href, onClick }) {
  const isList = Array.isArray(info)
    ? info.length > 1
    : info && typeof info === "object"
      ? Object.keys(info).length > 1
      : false;

  const plainInfo = (
    <span>
      {info}
      {info === "Deceased" && " \u2020"}
      {info === "Male" && " \u2642"}
      {info === "Female" && " \u2640"}
    </span>
  );

  return (
    <div className="grid grid-cols-2">
      <div>{label}</div>
      <div className="min-w-0 break-words">
        {renderInfo ? (
          <ul className={isList ? "list-disc pl-5" : "list-none"}>
            {allData && renderInfo(info, allData)}
            {!allData && renderInfo(info)}
          </ul>
        ) : Array.isArray(info) ? (
          <ul className={isList ? "list-disc pl-5" : "list-none"}>
            {info.map((inf, i) => {
              return <li key={i}>{inf}</li>;
            })}
          </ul>
        ) : href || onClick ? (
          <button
            type="button"
            className="cursor-pointer text-sky-600 no-underline hover:underline"
            onClick={onClick}
          >
            {plainInfo}
          </button>
        ) : (
          plainInfo
        )}
      </div>
    </div>
  );
}

export default CharacterInfoBoxRow;
