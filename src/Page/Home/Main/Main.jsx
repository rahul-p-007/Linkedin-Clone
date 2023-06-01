import React, { useEffect, useState } from "react";
import { useStateValue } from "../../../context/StateProvider";
import db from "../../../firebase/setup";
import Post from "./Post";
import Message from "../Message/Message";
import FlipMove from "react-flip-move";
function Main() {
  const [message, setMessage] = useState([]);
  // const [{ user }] = useStateValue();

  //This code is for fetching data from firebase
  useEffect(() => {
    db.collection("posts").onSnapshot((snapshot) =>
      setMessage(snapshot.docs.map((doc) => doc.data()))
    );
  }, []);
  return (
    <div style={{ paddingInline: "1rem" }}>
      <Post />
      <FlipMove>
        {message.map((message) => (
          <Message
            username={message.username}
            displayName={message.displayName}
            text={message.text}
            para={message.para}
            image={message.image}
            avatar={message.avatar}
          />
        ))}
      </FlipMove>
    </div>
  );
}

export default Main;
