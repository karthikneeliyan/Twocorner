// @ts-nocheck
import React, { useEffect, useState } from "react";
import { UserConnections } from "../../components/layout/UserConnections/UserConnections";
import { UserJournal } from "../../components/layout/UserJournal/UserJournal";
import "./Dashboard.css";
import { getUserConnections } from "../../static-data";
import { Logout } from "../../Profile";
import { Link } from "react-router-dom";

export const Dashboard = (props) => {
 const [userConnections,setUserConnections]= useState([])
  useEffect(()=>{ 
    const getConn=async ()=>{
     let connections=await getUserConnections()
     setUserConnections(connections)
  }
  getConn()
} ,[])
  return (
    <div className="dashboard">
        
      <div className={"content"}>
      
        <UserConnections userConnections={userConnections}/>
        <UserJournal />
      </div>
    </div>
  );
};
