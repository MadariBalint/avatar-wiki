function FranchiseInfoBoxRow({ label, info }) {
  return (
    <div className="grid grid-cols-2">
      <div className="grow">{label}</div>
      <div className="min-w-0 break-words">
        {typeof info === "object" && info.length > 1 ? (
          <ul className="list-disc pl-5">
            {info.map((item, i) => (
              <li key={i}>
                <span>{item}</span>
              </li>
            ))}
          </ul>
        ) : (
          <span>{info}</span>
        )}
      </div>
    </div>
  );
}

export default FranchiseInfoBoxRow;
