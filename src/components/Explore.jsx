import { Link } from "react-router-dom";
import ExploreItem from "./ExploreItem";
import Section from "./Section";
import SectionHeading from "./SectionHeading";

function Explore() {
  return (
    <>
      <Section>
        <SectionHeading title={`Explore`} />
        <div className="grid grid-cols-6 justify-center justify-items-center gap-y-3 py-3 lg:grid-cols-[repeat(6,max-content)] lg:gap-x-3">
          <Link to="/category:avatar">
            <ExploreItem file="avatar-logo" />
          </Link>
          <Link to="/category:avatar-twow">
            <ExploreItem file="avatar-twow-logo" />
          </Link>
          <Link to="/category:avatar-faa">
            <ExploreItem file="avatar-faa-logo" />
          </Link>
          <Link to="/category:games">
            <ExploreItem file="games-logo" />
          </Link>
          <Link to="/category:avatars">
            <ExploreItem file="avatars-logo" />
          </Link>
          <Link to="/category:navi">
            <ExploreItem file="navi-logo" />
          </Link>
          <Link to="/category:humans">
            <ExploreItem file="human-logo" />
          </Link>
          <Link to="/category:flora">
            <ExploreItem file="flora-logo" />
          </Link>
          <Link to="/category:fauna">
            <ExploreItem file="fauna-logo" />
          </Link>
          <Link to="/category:rda">
            <ExploreItem file="RDA-logo" />
          </Link>
          <Link to="/category:vehicle">
            <ExploreItem file="vehicle-logo" />
          </Link>
          <Link to="/category:weapons">
            <ExploreItem file="gun-logo" />
          </Link>
        </div>
      </Section>
    </>
  );
}

export default Explore;
