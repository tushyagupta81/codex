import React from 'react'
import axios from 'axios';
import { useState, useEffect } from 'react';
import { MessageCircle } from 'lucide-react';

const MessageBox = () => {
  const [messages, setMessages] = useState([]);

  // useEffect(() => {
  //   axios.get("/api/messages").then((res) => setMessages(res.data));
  // }, []);

  return (
    <div className="bg-white p-4  rounded-lg shadow-md">
      <div className=' flex items-center gap-4'>
      <div>
      <MessageCircle className='text-blue-600 bg-blue-100 size-10 p-2 border rounded-lg' />
      </div>
      <div>
      <h3 className="text-lg font-semibold">Messages</h3>
      
      {messages.length > 0 ? (
        <ul className='text-gray-600'>
          {messages.map((msg) => (
            <li key={msg.id}>{msg.text}</li>
          ))}
        </ul>
      ) : (
        <p className='text-gray-600'>No new messages</p>
      )}
      </div>
      </div>
    </div>
  );
};

export default MessageBox
