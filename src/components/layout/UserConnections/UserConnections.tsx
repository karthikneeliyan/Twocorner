import React from "react";
import userPlus from "../../../assets/images/user-plus.svg";
import userSelf from "../../../assets/images/user-self.png";
import user1 from "../../../assets/images/user-1.png";
import user2 from "../../../assets/images/user-2.png";
import user3 from "../../../assets/images/user-3.png";
import user4 from "../../../assets/images/user-4.png";
import plus from "../../../assets/images/plus.svg";
import { Logo } from "../../Logo/Logo";
import { List } from "../../List/List";
import "./UserConnections.css";

export const UserConnections: React.FC = () => {
  return (
    <div className="user-connections">
      <Logo />
      <List listItems={[{ img: userSelf, name: "Kiandra", action: "My Profile" }]} classes={["self"]} />
      <div className="divider-horiziontal"></div>
      <List listItems={[{ img: userPlus, name: "Requests" }]} classes={["actions"]} />
      <div className="divider-horiziontal"></div>
      <List
        listItems={[
          { img: user1, name: "John Kumar", action: "New Post" },
          { img: user2, name: "Andrei Masharin", action: "New Message" },
          { img: user3, name: "Iraj Pridoost", action: "New Post" },
          { img: user4, name: "Lakshmana Dongekerry" },
        ]}
        classes={["connections"]}
      >
        <div className="connections-header">
          <div>
            <h3>My Journals</h3>
          </div>
          <div>
            <img src={plus} alt="" />
          </div>
        </div>
      </List>
    </div>
  );
};
