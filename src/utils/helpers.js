export default function getCategoryBoxImageSrc(identity, category) {
  return `/images/${category}/${category === "franchise" ? `${identity.type}/` : ""}${identity.id}${category === "characters" ? "-face" : ""}${category === "franchise" ? "-poster" : ""}.webp`;
}
export const containerVariants = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.08,
    },
  },
};

export const itemVariants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { duration: 0.35 },
  },
};
