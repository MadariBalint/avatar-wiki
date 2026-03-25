export function resolveWikiLinks(markdown, wikiIndex) {
  return markdown.replace(/\[\[(.*?)\]\]/g, (_, rawLabel) => {
    const label = rawLabel.trim();
    const entry = wikiIndex[label.toLowerCase()];

    if (entry && entry.hasPage && entry.id) {
      return `[${label}](/${entry.id})`;
    }

    return label;
  });
}
