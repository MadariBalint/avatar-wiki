import { useParams } from "react-router-dom";

import FranchiseInfoBox from "../components/FranchiseInfoBox";
import CharacterInfoBox from "../components/CharacterInfoBox";
import { useEffect, useState } from "react";
import { resolveWikiLinks } from "../utils/resolveWikiLinks";
import MarkdownRenderer from "../components/MarkdownRenderer";
import Spinner from "../components/Spinner";
import FaunaInfoBox from "../components/FaunaInfoBox";
import FloraInfoBox from "../components/FloraInfoBox";
import LocationInfoBox from "../components/LocationInfoBox";

function Article({ allData, wikiIndex }) {
  const { slug } = useParams();
  const [rawMarkdown, setRawMarkdown] = useState("");
  const [loading, setLoading] = useState(true);
  const [notFound, setNotFound] = useState(false);

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
    return (
      <div className="flex h-svh items-center justify-center gap-3 font-[PapyrusWeb] text-6xl">
        <Spinner />
        <span>Loading...</span>
      </div>
    );
  }

  if (notFound) {
    return (
      <div className="flex min-h-screen justify-center font-[PapyrusWeb] text-6xl/25">
        <span className="text-center py-2">404 - Article not found</span>
      </div>
    );
  }
  const resolvedMarkdown = resolveWikiLinks(rawMarkdown, wikiIndex);

  const infoData = allData.find((item) => item.id === slug);
  return (
    <div className="flex flex-col md:mx-auto md:block md:max-w-3xl lg:max-w-5xl">
      <div className="lg:md-10 mb-10 flex justify-center font-[verdana] md:float-right md:ml-5">
        {infoData?.articleType === "franchise" && (
          <FranchiseInfoBox data={infoData} allData={allData} />
        )}
        {infoData?.articleType === "characters" && (
          <CharacterInfoBox data={infoData} allData={allData} />
        )}
        {infoData?.articleType === "fauna" && (
          <FaunaInfoBox data={infoData} allData={allData} />
        )}
        {infoData?.articleType === "flora" && (
          <FloraInfoBox data={infoData} allData={allData} />
        )}
        {infoData?.articleType === "locations" && (
          <LocationInfoBox data={infoData} allData={allData} />
        )}
      </div>
      <div className="px-10 md:px-0 md:pt-1">
        <MarkdownRenderer content={resolvedMarkdown} />
      </div>
    </div>
  );
}

export default Article;
