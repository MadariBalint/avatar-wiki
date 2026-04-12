function FeaturedCharactersItem({ file, name }) {
  return (
    <div
      className={`relative m-3 h-40 w-32 shadow-lg shadow-black lg:h-60 lg:w-56`}
    >
      <img
        className="h-full w-full object-cover"
        src={`/images/characters/${file}.webp`}
        alt={`${file}`}
      />
      <div className="absolute bottom-0 flex w-full items-center justify-center bg-black/50 text-white">
        <span className="font-[PapyrusWeb]">{name}</span>
      </div>
    </div>
  );
}

export default FeaturedCharactersItem;
