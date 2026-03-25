function ExploreItem({ file }) {
  return (
    <div>
      <img className="rounded-full" src={file} alt={`${file}`} />
    </div>
  );
}

export default ExploreItem;
