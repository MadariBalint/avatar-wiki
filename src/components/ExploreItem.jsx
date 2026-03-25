function ExploreItem({ file }) {
  return (
    <div>
      <img
        className="rounded-full"
        src={`src/assets/icons/${file}.jpg`}
        alt={`${file}`}
      />
    </div>
  );
}

export default ExploreItem;
