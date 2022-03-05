// @ts-nocheck
import React from "react";
import { UserConnections } from "../../components/layout/UserConnections/UserConnections";
import { UserJournal } from "../../components/layout/UserJournal/UserJournal";
import "./Dashboard.css";

export const Dashboard = (props) => {
  return (
    <div className="dashboard">
      <div className={"content"}>
        <UserConnections />
        <UserJournal />
      </div>
    </div>
  );
};
