const Shimmer = () => {
  return (
    <div className="restaurant-list">
      {Array(14)
        .fill("")
        .map(() => {
          return <div className="shimmer"></div>;
        })}
    </div>
  );
};

export default Shimmer;
