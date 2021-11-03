import "./Paginater.css";
import React from "react";

const Paginater = ({ page, totalPages, setPage }) => {
  return (
    <div className="paginater-container">
      <button
        value={1}
        onClick={setPage}
        disabled={page === 1}
        className="paginater-button"
      >
        {"<<"}
      </button>
      <button
        value={page - 1}
        onClick={setPage}
        disabled={page === 1}
        className="paginater-button"
      >
        {"<"}
      </button>
      <button
        value={page + 1}
        onClick={setPage}
        disabled={page === totalPages}
        className="paginater-button"
      >
        {">"}
      </button>
      <button
        value={totalPages}
        onClick={setPage}
        disabled={page === totalPages}
        className="paginater-button"
      >
        {">>"}
      </button>
      <span>{page} de {totalPages}</span>
    </div>
  );
};

export default Paginater;
