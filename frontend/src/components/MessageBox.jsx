import React from 'react'
import axios from 'axios';
import { useState, useEffect } from 'react';

const MessageBox = () => {
  const [messages, setMessages] = useState([]);

  // useEffect(() => {
  //   axios.get("/api/messages").then((res) => setMessages(res.data));
  // }, []);

  return (
    <div className="bg-white p-4 rounded-lg shadow-md">
      <h3 className="text-md font-semibold">Messages</h3>
      {messages.length > 0 ? (
        <ul>
          {messages.map((msg) => (
            <li key={msg.id}>{msg.text}</li>
          ))}
        </ul>
      ) : (
        <p>No new messages</p>
      )}
    </div>
  );
};

export default MessageBox
