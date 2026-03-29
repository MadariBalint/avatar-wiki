import Header from "./components/Header";
import Home from "./pages/Home";
import Characters from "./pages/Characters";
import Navi from "./pages/Navi";
import Rda from "./pages/Rda";
import Flora from "./pages/Flora";
import Fauna from "./pages/Fauna";
import { Route, Routes } from "react-router-dom";
import Article from "./pages/Article";

import franchise from "./data/franchise.json";
import affiliations from "./data/affiliations.json";
import characters from "./data/characters.json";
import fauna from "./data/fauna.json";
import flora from "./data/flora.json";
import locations from "./data/locations.json";
import rda from "./data/rda.json";

import { buildWikiIndex } from "./utils/wikiIndex";
import { useMemo } from "react";

const allData = [
  ...franchise.map((item) => ({ ...item, articleType: "franchise" })),
  ...affiliations.map((item) => ({ ...item, articleType: "affiliation" })),
  ...characters.map((item) => ({ ...item, articleType: "character" })),
  ...fauna.map((item) => ({ ...item, articleType: "fauna" })),
  ...flora.map((item) => ({ ...item, articleType: "flora" })),
  ...locations.map((item) => ({ ...item, articleType: "location" })),
  ...rda.map((item) => ({ ...item, articleType: "rda" })),
];

function App() {
  const wikiIndex = useMemo(() => buildWikiIndex(allData), []);
  return (
    <>
      <Header />
      <Routes>
        <Route
          path="/:slug"
          element={<Article allData={allData} wikiIndex={wikiIndex} />}
        />
        <Route path="/" element={<Home />} />
        <Route path="/category:characters" element={<Characters />} />
        <Route path="/category:navi" element={<Navi />} />
        <Route path="/category:rda" element={<Rda />} />
        <Route path="/category:flora" element={<Flora />} />
        <Route path="/category:fauna" element={<Fauna />} />
      </Routes>
    </>
  );
}

export default App;
