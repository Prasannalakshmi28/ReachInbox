import React, { useState, useEffect } from 'react';
import { fetchOneBoxList, deleteThread, replyToThread } from '../services/api';
import CustomTextEditor from './CustomTextEditor';
import './onebox.css';

const OneBox = () => {
  const [items, setItems] = useState([]);
  const [replyContent, setReplyContent] = useState('');

  useEffect(() => {
    const loadItems = async () => {
      const result = await fetchOneBoxList();
      setItems(result);
    };
    loadItems();
  }, []);

  const handleDelete = async (thread_id) => {
    await deleteThread(thread_id);
    setItems(items.filter(item => item.id !== thread_id));
  };

  const handleReply = async (thread_id) => {
    await replyToThread(thread_id, {
      from: "user@example.com",
      to: "recipient@example.com",
      subject: "Re: Subject",
      body: replyContent,
    });
  };

  const handleKeyPress = (event, thread_id) => {
    if (event.key === 'D') {
      handleDelete(thread_id);
    } else if (event.key === 'R') {
      handleReply(thread_id);
    }
  };

  return (
    <div className="onebox-container">
      {items.map(item => (
        <div key={item.id} className="onebox-item" tabIndex="0" onKeyDown={(e) => handleKeyPress(e, item.id)}>
          <p>{item.title}</p>
          <button onClick={() => handleDelete(item.id)}>Delete</button>
        </div>
      ))}
      <CustomTextEditor />
    </div>
  );
};

export default OneBox;
