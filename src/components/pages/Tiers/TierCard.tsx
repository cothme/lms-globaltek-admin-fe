const TierCard = () => {
  return (
    <>
      <div className="card lg:card-side bg-base-100 shadow-xl m-4 border border-gray-200">
        <div className="card-body">
          <h2 className="card-title">New album is released!</h2>
          <p>Click the button to listen on Spotiwhy app.</p>
          <div className="mt-4 card-actions">
            <button className="btn btn-primary w-full font-garet text-lg">
              View
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default TierCard;
