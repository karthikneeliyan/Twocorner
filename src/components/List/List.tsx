import React from "react";
import "./List.css";

interface List {
  listItems: { img: string; name: string; action?: string }[];
  classes?: string[];
  children?: any;
}

interface ListItem {
  img: string;
  name: string;
  action?: string;
}

export const List: React.FC<List> = ({ listItems, classes, children }) => {
  return (
    <div className={classes ? ["user-list", ...classes].join(" ") : "user-list"}>
      {children}
      <ul>
        {listItems.map((val) => (
          <ListItem {...val} />
        ))}
      </ul>
    </div>
  );
};

export const ListItem: React.FC<ListItem> = ({ img, name, action }) => {
  return (
    <li>
      <div className="user-list-image-content">
        <img src={img} alt="" />
      </div>
      <div>
        <h5>{name}</h5>
        {action && (
          <p>
            <a href="#">{action}</a>
          </p>
        )}
      </div>
    </li>
  );
};
