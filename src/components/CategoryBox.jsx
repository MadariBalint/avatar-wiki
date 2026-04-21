import { motion } from "motion/react";

function CategoryBox({ identity, category }) {
  const src = `/images/${category}/${category === "franchise" ? `${identity.type}/` : ""}${identity.id}${category === "characters" ? "-face" : ""}${category === "franchise" ? "-poster" : ""}.webp`;

  return (
    <motion.div className="flex flex-col items-center transition-all duration-250 hover:scale-110">
      <div className="h-54 w-48">
        <img
          className="h-full w-full object-contain"
          src={src}
          alt={`${identity.id} photo`}
        />
      </div>
      {category === "characters" && identity.name}
      {category === "franchise" && identity.title}
      {category === "rda" && identity.name}
      {category === "flora" && (identity.humanName || identity.naviName)}
      {category === "fauna" && (identity.humanName || identity.naviName)}
      {category === "locations" && identity.name}
    </motion.div>
  );
}

export default CategoryBox;
