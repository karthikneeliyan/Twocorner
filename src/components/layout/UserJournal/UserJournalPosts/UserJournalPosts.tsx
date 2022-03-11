import React from "react";
import userSelf from "../../../../assets/images/user-self.png";
import imageOptionsIcon from "../../../../assets/images/images.svg";
import messageIcon from "../../../../assets/images/message.svg";
import postImage from "../../../../assets/images/big-image.jpg";
import photoSaveIcon from "../../../../assets/images/photo-save.svg";
import "./UserJournalPosts.css";
import styled from "styled-components"
interface PostUser {
  user: string;
  postDate: string;
  tags?: string[];
}
const Button=styled("button")<any>`
display:${props=>props.open?'none':'inline-block'};
padding:10px;
border-radius: 25px;
margin:15px;

`
export const UserJournalPosts = () => {
  return (
    <>
      <div className={"user-journal-posts"}>
        <ul>
          <UserPostImage />
          <UserPostPost />
        </ul>
      </div>
     
    </>
  );
};
export const UserPostCapture = (props:any) => {

  return (
    <div className="user-posts-capture">
      <div className="capture-img-container">
        <img src={photoSaveIcon} alt="" />
      </div>
    
      <div className="capture-img-container">
        <img src={imageOptionsIcon} alt="" />
      </div>
      <div className="capture-img-container">
        <img src={messageIcon} alt="" />
      </div>
      <Button onClick={props.handleClick}>{props.open?"Stop":"Start"} Meeting</Button>
    </div>
  );
};
const PostUser: React.FC<PostUser> = ({ tags, user, postDate }) => {
  return (
    <div className="user">
      <div className={"user-img"}>
        <img src={userSelf} alt="" />
      </div>
      <div>
        <p>{user}</p>
        <div className="post-tags">
          <p className="text-small">{postDate}</p>
          {tags && (
            <ul className="post-tags-list">
              {tags.map((val) => (
                <li className="text-small">{val}</li>
              ))}
            </ul>
          )}
        </div>
      </div>
    </div>
  );
};

const PostImageOptions = () => {
  return (
    <div className="journal-image-options">
      <div className={"image-options"}>
        <img src={imageOptionsIcon} alt="" />
      </div>
    </div>
  );
};

const UserPostImage = () => {
  return (
    <li className={"journal-post journal-image"}>
      <PostUser user={"Kiandra"} postDate={"1 Day ago"} tags={["Koramangala social"]} />
      <PostImageOptions />
      <img src={postImage} alt="" />
    </li>
  );
};

const UserPostPost = () => {
  return (
    <li className={"journal-post post-post"}>
      <PostUser user={"Kiandra"} postDate={"2 Day ago"} />
      <div className="journal-post-content">
        <p>
          “Though we live in a world that dreams of ending that always seems about to give in something that will not acknowledge conclusion insists
          that we forever begin.”
        </p>
      </div>
    </li>
  );
};
