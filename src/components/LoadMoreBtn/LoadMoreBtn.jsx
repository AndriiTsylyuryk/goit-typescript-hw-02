import React from "react";

const LoadMoreBtn = ({ setPage }) => {
  return (
    <div>
      <button
        onClick={() => {
          setPage((prev) => prev + 1);
        }}
      >
        Load more
      </button>
    </div>
  );
};

export default LoadMoreBtn;
