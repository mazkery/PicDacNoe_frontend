import React from "react";
import OnlineBoard from "../OnlineBoard/index";
import ChatBox from "../Chatbox/chatbox.jsx";
const room=1;

function Homepage() {
  return (
    <div>
      <h1>Welcome to Homepage</h1>
      {/* <OnlineBoard /> */}
      <ChatBox room={room}/>
    </div>
  );
}

export default Homepage;
