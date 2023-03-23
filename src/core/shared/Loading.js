import React from "react";

export function Loading() {
  return (
    <div className="d-flex align-items-center">
      <strong>Ładuje...</strong>
      <div
        className="spinner-border ms-3"
        role="status"
        aria-hidden="true"
      ></div>
    </div>
  );
}
