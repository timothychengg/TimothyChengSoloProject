import React from 'react';
import ReactDOM from 'react-dom';
import QueueForm from './form';

const App = () => {
  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column', // Ensures children stack vertically
        alignItems: 'center', // Centers horizontally
        height: '100vh', // Makes the container full height of the viewport
      }}
    >
      <h1>Flock</h1>
      <p>~Birds of a feather flock together~</p>
      <QueueForm />
    </div>
  );
};

export default App;

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);
