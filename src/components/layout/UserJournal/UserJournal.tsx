import React from "react";

import { UserJournalHeader } from "./UserJournalHeader/UserJournalHeader";
import { UserJournalPosts } from "./UserJournalPosts/UserJournalPosts";
import "./UserJournal.css";
export const UserJournal = () => {
  return (
    <div className="user-journal">
      <UserJournalHeader />
      <UserJournalPosts />
    </div>
  );
};
