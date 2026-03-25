import Header from "./components/Header";
import Home from "./pages/Home";
import Characters from "./pages/Characters";
import Navi from "./pages/Navi";
import Rda from "./pages/Rda";
import Flora from "./pages/Flora";
import Fauna from "./pages/Fauna";
import { Route, Routes } from "react-router-dom";
import Article from "./pages/Article";

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/:slug" element={<Article />} />
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
