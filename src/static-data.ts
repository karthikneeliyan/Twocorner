import user1 from "./assets/images/user-1.png";
import user2 from "./assets/images/user-2.png";
import user3 from "./assets/images/user-3.png";
import user4 from "./assets/images/user-4.png";


export const LOGIN_URL="http://441c-27-7-171-203.ngrok.io/api/v1/login/"
export const SIGN_UP_URL="http://441c-27-7-171-203.ngrok.io/api/v1/signup"
export const GROUP_URL="http://441c-27-7-171-203.ngrok.io/api/v1/users"

// export const SIGN_UP_URL="http://441c-27-7-171-203.ngrok.io/api/v1/signup"

 const userDetails={
    "userDetails": {
      "name": "Selvaraj",
      "image": "test.jpg"
    },
    "newUser": "true|false"
  }

export const JWT="eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJwYXlsb2FkIjp7ImlkIjoiIiwicHVibGljQWRkcmVzcyI6IlJUWVVJTzU2Nzg5MEZHSEpLIn19.14vec5ziaXa1m_HCjgfq8RAJo8_vYIaY3piA5ywCpO0";
export const PUBLIC_ADDRESS="RTYUIO567890FGHJK";
export const JOURNAL={
  "groupId": "1",
  "journals": [
      {
          "type": "image|notes|video",
          "status": "started|in-progress|completed|failed",
          "thumbnailUrl": "fetch_thumbnail_url",
          "url": "image_url",
          "timeStamp": "epoch-utcTimestamp",
          "notes": "test",
          "isEmbedded": "true|false"
      }
  ]  
};
export const GROUPS={
  "groups": [
      {
          "groupName": "Ivan",
          "groupAvatar": "Ivan.jpg",
          "users": {"_ids": [1,3,4]}
      }
  ]
}
export const USER={
  "userDetails": {
    "name": "Selvaraj",
    "image": "test.jpg"
  },
  "newUser": "true|false"
}

const userConnections =[
  { img: user1, name: "karthik", action: "New Post" },
  { img: user2, name: "Andrei Masharin", action: "New Message" },
  { img: user3, name: "Iraj Pridoost", action: "New Post" },
  { img: user4, name: "Lakshmana Dongekerry" },
]
export const getUserConnections=()=>{
  return new Promise((res,rej)=>{res(userConnections)})
  }
export const getUser=()=>{
  return new Promise((res,rej)=>{res(USER)})
  }
export const getJournal=()=>{
  return new Promise((res,rej)=>{res(JOURNAL)})
}

export const getGroup=()=>{
  return new Promise((res,rej)=>{res(GROUPS)})
  }