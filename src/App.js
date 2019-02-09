import React from "react";
import ReactDOM from "react-dom";
import Search from './Search.jsx';

const App = () => {
  return (
    <div>
      <p>Catch the Cup</p>
      <Search />
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById("app"));