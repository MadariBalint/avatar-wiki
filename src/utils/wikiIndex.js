export function buildWikiIndex(entries) {
  const index = {};

  for (const entry of entries) {
    if (entry.title && typeof entry.title === "string") {
      index[entry.title.trim().toLowerCase()] = entry;
    }

    if (entry.name && typeof entry.name === "string") {
      index[entry.name.trim().toLowerCase()] = entry;
    }

    if (entry.naviName && typeof entry.naviName === "string") {
      index[entry.naviName.trim().toLowerCase()] = entry;
    }

    if (entry.humanName && typeof entry.humanName === "string") {
      index[entry.humanName.trim().toLowerCase()] = entry;
    }
  }

  return index;
}
