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
      {category === "characters" && <span>{identity.name}</span>}
      {category === "franchise" && identity.title}
      {category === "rda" && identity.name}
      {category === "flora" && identity.humanName}
      {category === "fauna" && identity.humanName}
    </div>
  );
}

export default CategoryBox;
