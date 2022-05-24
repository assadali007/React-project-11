import Main from "./components/Main";
import Navbar from "./components/Navbar";
import React from 'react';

function App() {

    const [color,setColor] = React.useState(true);
    function toggle()
    {
        setColor(prestate => !prestate)
    }
  return (
      <div className="container">
        <Navbar  darkMode={color} toggleDarkMode={toggle} />
        <Main  darkMode={color} />
      </div>

  );
}

export default App;
