function FranchiseElement({
  name = "",
  fullTitle = "",
  category,
  className = "",
}) {
  return (
    <div className={`my-1 flex h-full flex-col items-center ${className}`}>
      <div className="m-3 flex h-48 w-32 flex-col lg:h-80 lg:w-56">
        <img
          className="h-full w-full rounded-md object-cover shadow-md/60 shadow-black"
          src={`/images/franchise/${category}/${name}-poster.webp`}
          alt={`${name}-poster`}
        />
      </div>
      <div className="mx-10 flex max-w-32 flex-row justify-center rounded-xl bg-sky-400/20 px-2 py-1 shadow-xs/30 shadow-black lg:max-w-56">
        <header className="text-center">{fullTitle}</header>
      </div>
    </div>
  );
}

export default FranchiseElement;
