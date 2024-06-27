import React from "react";

import "./BreadCrumbs.css";

import { Link } from "react-router-dom";

function BreadCrumbs({ currentPage }) {
  return (
    <div className="breadcrumbs-section">
      <h4>
        <Link to="/">Home</Link>
      </h4>
      &nbsp;/&nbsp;
      <h4 className="app-yellow-text">{currentPage}</h4>
    </div>
  );
}

export default BreadCrumbs;
