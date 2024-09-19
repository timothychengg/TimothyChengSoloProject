import React, { useState } from 'react';
//Component constructor
const QueueForm = () => {
  // State to hold the form input value - string bc it will be a url or path
  const [inputValue, setInputValue] = useState('');
  // State to hold the queue - array because of the Queue data structure setup
  const [queue, setQueue] = useState([]);

  // function is triggered whenever the user types
  const handleChange = (event) => {
    // updates the state of the inputValue - the passed in argument is the new stringified input value
    setInputValue(event.target.value);
  };

  // When the user submits the form
  const handleSubmit = (event) => {
    // do not refresh the page so we can maintain the queue order
    event.preventDefault();
    // if it is truthy that it is a url or path
    if (isValidUrl(inputValue) || isValidFilePath(inputValue)) {
      // invoke setQueue to update the state of queue, spread the previous urls and links and "push" the new inputValue into this new static array
      setQueue((prevQueue) => [...prevQueue, inputValue]);
      // reset the inputValue to an empty string
      setInputValue('');
      // if the inputValue isn't a valid URL or file path then give the user this alert 
    } else {
      alert('Please enter a valid URL or file path.');
    }
  };

  // Helper function to check if the input is a valid URL
  const isValidUrl = (value) => {
    // new URL is a build-in JS URL object constructor
    try {
      new URL(value);
      return true;
    } catch {
      return false;
    }
  };

  // Helper function to check if the input is a valid file path
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
