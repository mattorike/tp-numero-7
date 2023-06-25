import React, { useState, useEffect } from 'react';

const CharacterCounter = () => {
  const [text, setText] = useState('');
  const [charCount, setCharCount] = useState(0);
  const maxChars = 100;

  useEffect(() => {
    setCharCount(text.length);
  }, [text]);

  const handleChange = (e) => {
    const newText = e.target.value;
    if (newText.length <= maxChars) {
      setText(newText);
    }
  };

  return (
    <div>
      <textarea value={text} onChange={handleChange} />
      <p>Cantidad de letras: {charCount}</p>
      {charCount >= maxChars && <p>Son muchos caracteres!</p>}
    </div>
  );
};

export default CharacterCounter;