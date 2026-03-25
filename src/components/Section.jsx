function Section({ children }) {
  return (
    <section className="mx-5 font-[verdana]">
      <div className="mx-auto max-w-full md:w-xl lg:w-6xl">{children}</div>
    </section>
  );
}

export default Section;
