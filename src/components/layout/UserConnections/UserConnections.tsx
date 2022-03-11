import React from "react";
import userPlus from "../../../assets/images/user-plus.svg";
import userSelf from "../../../assets/images/user-self.png";

import plus from "../../../assets/images/plus.svg";
import { Logo } from "../../Logo/Logo";
import { List } from "../../List/List";
import "./UserConnections.css";

export const UserConnections: React.FC = (props:any) => {
  const handleUserInviteClick=()=>{
// navigat
  }
  return (
    <div className="user-connections">
      <Logo />
      <List listItems={[{ img: userSelf, name: "Kiandra", action: "My Profile" }]} classes={["self"]} />
      <div className="divider-horiziontal"></div>
      <List listItems={[{ img: userPlus, name: "Requests" }]} classes={["actions"]} />
      <div className="divider-horiziontal"></div>
      <List
        listItems={props.userConnections}
        classes={["connections"]}
      >
        <div className="connections-header">
          <div>
            <h3>My Journals</h3>
          </div>
          <div>
            <img src={plus} onClick={handleUserInviteClick} alt="" />
          </div>
        </div>
      </List>
    </div>
  );
};
