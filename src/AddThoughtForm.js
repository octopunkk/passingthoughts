import React, {useState} from 'react';
import { generateId, getNewExpirationTime } from './utilities';

export function AddThoughtForm(props) {
  const [text, setText] = useState('');
  const handleTextChange = (event) => {
    setText(event.target.value);
  };
  const handleSubmit = (event) => {
    event.preventDefault();
    let newThought = {
      id: generateId(),
      text: text,
      expiresAt: getNewExpirationTime(),
    };
    console.log('lol');
    if(text.length>0){
      props.addThought(newThought);
    }
    
    setText('');
  }
  return (
    <form className="AddThoughtForm" onSubmit={handleSubmit}>
      <input
        onChange={handleTextChange}
        type="text"
        value={text}
        aria-label="What's on your mind?"
        placeholder="What's on your mind?"
      />
      <input type="submit" value="Add"  />
    </form>
  );
}
