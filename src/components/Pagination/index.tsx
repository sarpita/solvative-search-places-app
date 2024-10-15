import React from "react";

interface PaginationProps {
  page: number;
  onPrevious: () => void;
  onNext: () => void;
}

const Pagination: React.FC<PaginationProps> = ({ page, onPrevious, onNext }) => {
  return (
    <div className="pagination-container">
      <button onClick={onPrevious} disabled={page === 0}>
        Previous
      </button>
      <button onClick={onNext}>Next</button>
    </div>
  );
};

export default Pagination;
