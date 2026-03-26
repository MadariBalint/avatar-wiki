import { useParams } from "react-router-dom";

import franchise from "../data/franchise.json";
import affiliations from "../data/affiliations.json";
import characters from "../data/characters.json";
import fauna from "../data/fauna.json";
import flora from "../data/flora.json";
import locations from "../data/locations.json";
import rda from "../data/rda.json";

import FranchiseInfoBox from "../components/FranchiseInfoBox";
import CharacterInfoBox from "../components/CharacterInfoBox";
import { useEffect, useMemo, useState } from "react";
import { buildWikiIndex } from "../utils/wikiIndex";
import { resolveWikiLinks } from "../utils/resolveWikiLinks";
import MarkdownRenderer from "../components/MarkdownRenderer";
import Spinner from "../components/Spinner";

const allData = [
  ...franchise.map((item) => ({ ...item, articleType: "franchise" })),
  ...affiliations.map((item) => ({ ...item, articleType: "affiliation" })),
  ...characters.map((item) => ({ ...item, articleType: "character" })),
  ...fauna.map((item) => ({ ...item, articleType: "fauna" })),
  ...flora.map((item) => ({ ...item, articleType: "flora" })),
  ...locations.map((item) => ({ ...item, articleType: "location" })),
  ...rda.map((item) => ({ ...item, articleType: "rda" })),
];

function Article() {
  const { slug } = useParams();
  const [rawMarkdown, setRawMarkdown] = useState("");
  const [loading, setLoading] = useState(true);
  const [notFound, setNotFound] = useState(false);

  const wikiIndex = useMemo(() => buildWikiIndex(allData), []);

  useEffect(() => {
    let isCancelled = false;

    async function loadMarkdown() {
      setLoading(true);
      setNotFound(false);

      try {
        const response = await fetch(`/content/${slug}.md`);
        const text = await response.text();

        const looksLikeHtml =
          text.trim().startsWith("<!doctype html>") ||
          text.trim().startsWith("<html");

        if (!response.ok || looksLikeHtml) {
          throw new Error("Markdown file not found  ");
        }

        if (!isCancelled) {
          setRawMarkdown(text);
        }
      } catch (error) {
        if (!isCancelled) {
          setRawMarkdown("");
          setNotFound(true);
        }
      } finally {
        if (!isCancelled) {
          setLoading(false);
        }
      }
    }

    loadMarkdown();

    return () => {
      isCancelled = true;
    };
  }, [slug]);

  if (loading) {
    return <div className="flex justify-center text-6xl mt-10 font-[PapyrusWeb] gap-3">
      <Spinner />
      <span>Loading...</span></div>;
  }

  if (notFound) {
    return <div className="flex justify-center text-6xl mt-10 font-[PapyrusWeb]"><span>404 - Article not found</span></div>;
  }

  const resolvedMarkdown = resolveWikiLinks(rawMarkdown, wikiIndex);

  const infoData = allData.find((item) => item.id === slug);
  return (
    <div className="lg:mx-auto lg:max-w-5xl">
      <div className="float-right mb-10 ml-10 font-[verdana]">
        {infoData?.articleType === "franchise" && (
          <FranchiseInfoBox data={infoData} />
        )}
        {infoData?.articleType === "character" && (
          <CharacterInfoBox data={infoData} />
        )}
      </div>
      <div>
        <MarkdownRenderer content={resolvedMarkdown} />
      </div>
    </div>
  );
}

export default Article;
