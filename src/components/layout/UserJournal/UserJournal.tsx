import React, { useEffect, useState } from "react";

import { UserJournalHeader } from "./UserJournalHeader/UserJournalHeader";
import {
  UserJournalPosts,
  UserPostCapture,
} from "./UserJournalPosts/UserJournalPosts";
import "./UserJournal.css";
import { WhereByMeeting } from "./WhereByMeeting";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { getJournal } from "../../../static-data";

const StyledDiv = styled.div<any>`
  display: ${(props) => (props.open ? "block" : "none")};
  position: relative;
  overflow: auto;
  min-height: 600px;
`;
const Meeeting = styled(WhereByMeeting)`
  position: relative;
  overflow: auto;
  min-height: 600px;
  width: 25rem;
  height: 35rem;
`;
const JournalDiv = styled("div")<any>`
  display: ${(props) => (props.open ? "none" : "block")};
  position: relative;
  overflow: auto;
`;
const Container = styled("div")<any>`
  width: 90%;
  position: relative;

  padding: 5px;
  height: 90%;
`;

const Bottom = styled("div")<any>`
  display: inline;
  overflow: auto;
`;
const Capture = styled(UserPostCapture)<any>`
  display: inline;
  overflow: auto;
  margin-left:200px;
`;

const StyledLink = styled(Link)<any>`
  margin-left: 490px;
  padding: 10px;
`;
export const UserJournal = () => {
  const [open, setOpen] = useState(false);
  const [journal, setJournal] = useState([]);

  const handleClick = () => {
    setOpen(!open);
  };
  useEffect(() => {
    const getJournalData = async () => {
      let journal:any = await getJournal();
      setJournal(journal);
    };
    getJournalData()
   
  }, []);
  return (
    <Container>
      <StyledDiv open={open}>
        <Meeeting />
      </StyledDiv>
      <StyledLink to="/">Logout</StyledLink>
      <JournalDiv open={open}>
        <UserJournalHeader journal={journal}/>
        <UserJournalPosts />
      </JournalDiv>
      <Bottom>
        <Capture open={open} handleClick={handleClick} />
      </Bottom>
    </Container>
  );
};
