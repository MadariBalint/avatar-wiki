function CharacterInfoBoxRow({ label, info, renderInfo, allData}) {
  const isList = Array.isArray(info)
    ? info.length > 1
    : info && typeof info === "object"
      ? Object.keys(info).length > 1
      : false;

  return (
    <div className="grid grid-cols-2  ">
      <div >{label}</div>
      <div className="min-w-0 break-words">

        {renderInfo ? (
          <ul className={isList ? "list-disc pl-5" : "list-none"}>
            {allData && renderInfo(info, allData)}
            {!allData && renderInfo(info)}
          </ul>
        ) : Array.isArray(info) ? (
          <ul className={isList ? "list-disc pl-5" : "list-none"}>
            {info.map((inf, i) => {
              return (
                <li key={i}>
                  {inf}
                </li>
              )
            }

            )}
          </ul>
        ) : (<span>{info}{info === "Deceased" && " †"}{info === "Male" && " ♂"}{info === "Female" && " ♀"}</span>
        )}
      </div>
    </div>
  );
}

export default CharacterInfoBoxRow;
