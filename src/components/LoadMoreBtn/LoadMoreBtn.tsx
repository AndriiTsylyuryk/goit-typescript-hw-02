import React from "react";

interface LoadMoreBtnProps {
  setPage: (prev: number) => void;
}

const LoadMoreBtn: React.FC<LoadMoreBtnProps> = ({ setPage }) => {
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
