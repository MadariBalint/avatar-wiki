function CategoryBox({ identity, category }) {
  return (
    <div className="flex flex-col items-center">
      <div className="h-54 w-48">
        <img
          className="h-full w-full object-cover"
          src={`/images/${category}/${category === "franchise" ? `${identity.type}/` : ""}${identity.id}${category === "characters" ? "-face" : ""}.png`}
          alt={`${identity.id} photo`}
        />
      </div>
      {category === "characters" && identity.name}
      {category === "franchise" && identity.title}
      {category === "rda" && identity.name}
      {category === "flora" && (identity.humanName || identity.naviName)}
      {category === "fauna" && (identity.humanName || identity.naviName)}
    </div>
  );
}

export default CategoryBox;
