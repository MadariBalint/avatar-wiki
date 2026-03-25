import Section from "./Section";
import SectionHeading from "./SectionHeading";

function About() {
  return (
    <Section>
      <SectionHeading title={"About the site"} />

      <p className="m-5">
        This avatar wiki is a personal project made with passion. Since I am an
        Avatar fan I wanted to create a small wiki-like website to showcase my
        skills in web development and also to showcase my obsession with the
        franchise.
        <br />
        <br />
        On this webpage you can find some detailed and interesting information
        about the world of Pandora.
      </p>
    </Section>
  );
}

export default About;
