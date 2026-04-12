import { Link } from "react-router-dom";
import ExploreItem from "./ExploreItem";
import Section from "./Section";
import SectionHeading from "./SectionHeading";

import avatarFaaLogo from "../assets/icons/avatar-faa-logo.webp";
import avatarLogo from "../assets/icons/avatar-logo.webp";
import avatarTwowLogo from "../assets/icons/avatar-twow-logo.webp";
import avatarsLogo from "../assets/icons/avatars-logo.webp";
import faunaLogo from "../assets/icons/fauna-logo.webp";
import floraLogo from "../assets/icons/flora-logo.webp";
import gamesLogo from "../assets/icons/games-logo.webp";
import gunLogo from "../assets/icons/gun-logo.webp";
import humanLogo from "../assets/icons/human-logo.webp";
import naviLogo from "../assets/icons/navi-logo.webp";
import rdaLogo from "../assets/icons/RDA-logo.webp";
import vehicleLogo from "../assets/icons/vehicle-logo.webp";

function Explore() {
  return (
    <>
      <Section>
        <SectionHeading title={`Explore`} />
        <div className="grid grid-cols-6 justify-center justify-items-center gap-y-3 py-3 lg:grid-cols-[repeat(6,max-content)] lg:gap-x-3">
          <Link to="/avatar">
            <ExploreItem file={avatarLogo} />
          </Link>
          <Link to="/avatar-twow">
            <ExploreItem file={avatarTwowLogo} />
          </Link>
          <Link to="/avatar-faa">
            <ExploreItem file={avatarFaaLogo} />
          </Link>
          <Link to="/category:games">
            <ExploreItem file={gamesLogo} />
          </Link>
          <Link to="/category:avatars">
            <ExploreItem file={avatarsLogo} />
          </Link>
          <Link to="/category:navi">
            <ExploreItem file={naviLogo} />
          </Link>
          <Link to="/category:humans">
            <ExploreItem file={humanLogo} />
          </Link>
          <Link to="/category:flora">
            <ExploreItem file={floraLogo} />
          </Link>
          <Link to="/category:fauna">
            <ExploreItem file={faunaLogo} />
          </Link>
          <Link to="/category:rda">
            <ExploreItem file={rdaLogo} />
          </Link>
          <Link to="/category:vehicle">
            <ExploreItem file={vehicleLogo} />
          </Link>
          <Link to="/category:weapons">
            <ExploreItem file={gunLogo} />
          </Link>
        </div>
      </Section>
    </>
  );
}

export default Explore;
