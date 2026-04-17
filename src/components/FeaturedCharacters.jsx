import { Link } from "react-router-dom";
import FeaturedCharactersItem from "./FeaturedCharactersItem";
import Section from "./Section";
import SectionHeading from "./SectionHeading";

function FeaturedCharacters() {
  return (
    <Section>
      <SectionHeading title={`Featured Characters`} />
      <div className="my-10 flex flex-col items-center md:grid md:grid-cols-6 md:justify-center md:justify-items-center lg:grid-cols-[repeat(16,max-content)]">
        <Link to="/jake-sully" className="md:col-span-2 lg:col-span-4 transition-all duration-150 hover:scale-105">
          <FeaturedCharactersItem file="jake-sully-face" name="Jake Sully" />
        </Link>
        <Link to="/neytiri" className="md:col-span-2 lg:col-span-4 transition-all duration-150 hover:scale-105">
          <FeaturedCharactersItem file="neytiri-face" name="Neytiri" />
        </Link>
        <Link to="/loak" className="md:col-span-2 lg:col-span-4 transition-all duration-150 hover:scale-105">
          <FeaturedCharactersItem file="loak-face" name="Loak" />
        </Link>
        <Link to="/kiri" className="md:col-span-2 lg:col-span-4 transition-all duration-150 hover:scale-105">
          <FeaturedCharactersItem file="kiri-face" name="Kiri" />
        </Link>
        <Link to="/neteyam" className="md:col-span-2 lg:col-span-4 transition-all duration-150 hover:scale-105">
          <FeaturedCharactersItem file="neteyam-face" name="Neteyam" />
        </Link>
        <Link to="/spider" className="md:col-span-2 lg:col-span-4 transition-all duration-150 hover:scale-105">
          <FeaturedCharactersItem file="spider-face" name="Spider" />
        </Link>
        <Link to="/miles-quaritch" className="md:col-span-2 lg:col-span-4 transition-all duration-150 hover:scale-105">
          <FeaturedCharactersItem
            file="miles-quaritch-face"
            name="Miles Quaritch"
          />
        </Link>
        <Link to="/varang" className="md:col-span-2 lg:col-span-4 transition-all duration-150 hover:scale-105">
          <FeaturedCharactersItem file="varang-face" name="Varang" />
        </Link>
      </div>
    </Section>
  );
}

export default FeaturedCharacters;
