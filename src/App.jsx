import { Route, Routes } from "react-router-dom";
import { useEffect, useMemo, useState } from "react";

import Home from "./pages/Home";
import Characters from "./pages/Characters";
import Navi from "./pages/Navi";
import Rda from "./pages/Rda";
import Flora from "./pages/Flora";
import Fauna from "./pages/Fauna";
import Article from "./pages/Article";

import Header from "./components/Header";
import Spinner from "./components/Spinner";

import { buildWikiIndex } from "./utils/wikiIndex";
import ScrollToTop from "./components/ScrollToTop";
import Games from "./pages/Games";
import Avatars from "./pages/Avatars";
import Humans from "./pages/Humans";
import Weapons from "./pages/Weapons";
import Vehicles from "./pages/Vehicles";

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
  const [allData, setAllData] = useState([]);

  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function loadAllData() {
      setLoading(true);
      try {
        const [
          franchise,
          affiliations,
          characters,
          fauna,
          flora,
          locations,
          rda,
        ] = await Promise.all([
          (await fetch("data/franchise.json")).json(),
          (await fetch("data/affiliations.json")).json(),
          (await fetch("data/characters.json")).json(),
          (await fetch("data/fauna.json")).json(),
          (await fetch("data/flora.json")).json(),
          (await fetch("data/locations.json")).json(),
          (await fetch("data/rda.json")).json(),
        ]);
        const combined = [
          ...franchise.map((item) => ({ ...item, articleType: "franchise" })),
          ...affiliations.map((item) => ({
            ...item,
            articleType: "affiliation",
          })),
          ...characters.map((item) => ({ ...item, articleType: "characters" })),
          ...fauna.map((item) => ({ ...item, articleType: "fauna" })),
          ...flora.map((item) => ({ ...item, articleType: "flora" })),
          ...locations.map((item) => ({ ...item, articleType: "locations" })),
          ...rda.map((item) => ({ ...item, articleType: "rda" })),
        ];

        setAllData(combined);
      } catch (err) {
        console.error("Error loading data", err);
      } finally {
        setLoading(false);
      }
    }
    loadAllData();
  }, []);

  const wikiIndex = useMemo(() => buildWikiIndex(allData), [allData]);

  if (loading) {
    return (
      <div className="flex h-svh items-center justify-center gap-3 font-[PapyrusWeb] text-6xl">
        <Spinner />
        <span>Loading...</span>
      </div>
    );
  }

  return (
    <>
      <Header />
      <ScrollToTop />
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
        <Route path="/category:games" element={<Games ABC={alphabet} />} />
        <Route path="/category:avatars" element={<Avatars ABC={alphabet} />} />
        <Route path="/category:humans" element={<Humans ABC={alphabet} />} />
        <Route path="/category:weapons" element={<Weapons ABC={alphabet} />} />
        <Route
          path="/category:vehicles"
          element={<Vehicles ABC={alphabet} />}
        />
      </Routes>
    </>
  );
}

export default App;
