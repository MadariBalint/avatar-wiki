function ExploreItem({ file }) {
  return (
    <div className="relative">
      <img className="rounded-full" src={file} alt={`${file}`} />
    </div>
  );
}

export default ExploreItem;
