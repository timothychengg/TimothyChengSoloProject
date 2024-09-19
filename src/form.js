import React, { useState } from 'react';

const QueueForm = () => {
  // State to hold the form input value
  const [inputValue, setInputValue] = useState('');
  // State to hold the queue
  const [queue, setQueue] = useState([]);

  // Handle input changes
  const handleChange = (event) => {
    setInputValue(event.target.value);
  };

  // Handle form submission
  const handleSubmit = (event) => {
    event.preventDefault();

    if (isValidUrl(inputValue) || isValidFilePath(inputValue)) {
      setQueue((prevQueue) => [...prevQueue, inputValue]);
      setInputValue('');
    } else {
      alert('Please enter a valid URL or file path.');
    }
  };

  // Function to check if the input is a valid URL
  const isValidUrl = (value) => {
    try {
      new URL(value);
      return true;
    } catch {
      return false;
    }
  };

  // Function to check if the input is a valid file path
  const isValidFilePath = (value) => {
    return value && value.trim().length > 0;
  };

  // Function to process all queue items
  const processAllQueueItems = () => {
    queue.forEach((item) => {
      if (isValidUrl(item)) {
        window.open(item, '_blank'); // Opens the URL in a new tab
      }
    });
    // Optionally, clear the queue after processing
    setQueue([]);
  };

  // Function to display the queue with options to remove items
  const displayQueue = () => {
    return queue.map((item, index) => (
      <li key={index}>
        {item}
        <button onClick={() => removeFromQueue(index)}>Remove</button>
      </li>
    ));
  };

  // Function to remove an item from the queue
  const removeFromQueue = (index) => {
    setQueue((prevQueue) => prevQueue.filter((_, i) => i !== index));
  };

  return (
    <div>
      <h1>Queue Form</h1>
      <form onSubmit={handleSubmit}>
        <label htmlFor='input'>Enter URL or File Path:</label>
        <input
          type='text'
          id='input'
          value={inputValue}
          onChange={handleChange}
          placeholder='https://example.com or C:/path/to/application'
          required
        />
        <button type='submit'>Submit</button>
      </form>
      <h2>Queue:</h2>
      <ul>{displayQueue()}</ul>
      <button onClick={processAllQueueItems}>Execute All</button>
    </div>
  );
};

export default QueueForm;
