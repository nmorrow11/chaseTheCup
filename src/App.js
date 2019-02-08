import React from "react";
import ReactDOM from "react-dom";
import Search from './Search.jsx';

const App = () => {
  return (
    <div>
      <p>React here!</p>
      <Search />
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById("app"));