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
  ...characters.map((item) => ({ ...item, articleType: "characters" })),
  ...fauna.map((item) => ({ ...item, articleType: "fauna" })),
  ...flora.map((item) => ({ ...item, articleType: "flora" })),
  ...locations.map((item) => ({ ...item, articleType: "location" })),
  ...rda.map((item) => ({ ...item, articleType: "rda" })),
];
const alphabet = [
  "A",
  "B",
  "C",
  "D",
  "E",
  "F",
  "G",
  "H",
  "I",
  "J",
  "K",
  "L",
  "M",
  "N",
  "O",
  "P",
  "Q",
  "R",
  "S",
  "T",
  "U",
  "V",
  "W",
  "X",
  "Y",
  "Z",
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
        <Route
          path="/category:characters"
          element={<Characters ABC={alphabet} />}
        />
        <Route path="/category:navi" element={<Navi ABC={alphabet} />} />
        <Route
          path="/category:rda"
          element={<Rda ABC={alphabet} allData={allData} />}
        />
        <Route path="/category:flora" element={<Flora ABC={alphabet} />} />
        <Route path="/category:fauna" element={<Fauna ABC={alphabet} />} />
      </Routes>
    </>
  );
}

export default App;
