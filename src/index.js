import React from 'react';
import ReactDOM from 'react-dom';
import QueueForm from './form';
// this is the root & parent component that will be rendered to the localhost server for the client to see
const App = () => {
  // this is JSX syntax where you can have CSS HTML and JS in the return statement of a Component constructor function
  return (
    // this is an html element which is a div - used as a generic element to group together other HTML elements
    <div
      //this is inline css styling that uses flexbox to center a div and makes the sizing dynamic when resizing the entire webpage
      style={{
        //initialize flexbox
        display: 'flex',
        // top down, vertical
        flexDirection: 'column',
        // moves the div to the center of the page
        alignItems: 'center',
        // viewport makes the div dynamically sized, relative to the sizing of the window
        height: '100vh',
      }}
    >
      <h1>Flock</h1>
      <p>"Birds of a feather flock together"</p>
      <QueueForm />
    </div>
  );
};
// in the last part of the div, we are rendering an h1 TITLE and a paragraph that goes along with it
// lastly, we are rendering a custom react component
export default App;
// look for the ID in an html root file in the document "entry point where the react app will be rendered"
//create the React Root here
//root here is an object
const root = ReactDOM.createRoot(document.getElementById('root'));
//render is a method attached to the object tht displays the React components in the root file of the DOM
// inputting my parent react component
root.render(<App />);
