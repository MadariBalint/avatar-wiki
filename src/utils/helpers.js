export default function getCategoryBoxImageSrc(identity, category) {
  return `/images/${category}/${category === "franchise" ? `${identity.type}/` : ""}${identity.id}${category === "characters" ? "-face" : ""}${category === "franchise" ? "-poster" : ""}.webp`;
}

function hashString(value) {
  let hash = 0;

  for (let i = 0; i < value.length; i += 1) {
    hash = (hash * 31 + value.charCodeAt(i)) >>> 0;
  }

  return hash;
}

function getDailySeed() {
  const today = new Date();
  const year = today.getFullYear();
  const month = String(today.getMonth() + 1).padStart(2, "0");
  const day = String(today.getDate()).padStart(2, "0");

  return `${year}-${month}-${day}`;
}

export function selectFeaturedEntries(entries, limit = 8) {
  const pageEntries = entries.filter((entry) => entry.hasPage);
  const dailySeed = getDailySeed();

  if (pageEntries.length <= limit) {
    return pageEntries;
  }

  return [...pageEntries]
    .sort((a, b) => {
      const scoreA = hashString(
        `${dailySeed}:${a.articleType ?? ""}:${a.id}`
      );
      const scoreB = hashString(
        `${dailySeed}:${b.articleType ?? ""}:${b.id}`
      );

      if (scoreA !== scoreB) {
        return scoreA - scoreB;
      }

      return a.id.localeCompare(b.id);
    })
    .slice(0, limit);
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
