import LargeFranchise from "./LargeFranchise";
import MediumFranchise from "./MediumFranchise";
import MobileOnlyFranchise from "./MobileOnlyFranchise";
import Section from "./Section";
import SectionHeading from "./SectionHeading";

function Franchise() {
  return (
    <div>
      <Section>
        <SectionHeading title="Avatar Franchise" />
        <div className="md:hidden">
          <MobileOnlyFranchise />
        </div>
        <div className="hidden md:block lg:hidden">
          <MediumFranchise />
        </div>
        <div className="hidden lg:block">
          <LargeFranchise />
        </div>
      </Section>
    </div>
  );
}

export default Franchise;
