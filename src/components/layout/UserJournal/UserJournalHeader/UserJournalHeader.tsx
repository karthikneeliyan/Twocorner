import React from "react";
import menuDots from "../../../../assets/images/menu-dots.svg";
import "./UserJournalHeader.css";

export const UserJournalHeader = () => {
  return (
    <div className="user-journal-header">
      <div>
        <h2>Kiandra & Alex's</h2>
        <h2 className="text-muted">Journal</h2>
      </div>
      <div>
        <img src={menuDots} alt="" />
      </div>
    </div>
  );
};
