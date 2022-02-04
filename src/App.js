import { useState } from 'react';
import Alert from './components/Alert';
import Navbar from "./components/Navbar";
import TextArea from "./components/TextArea";
import About from "./components/About";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
//import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'


function App() {

  //Dark Mode Functions
  const [mode, setMode] = useState('light');
  const funcToggleMode = () => {
    if (mode === 'dark') {
      setMode('light');
      document.body.style.background = 'white'
      funcShowAlert('Dark Mode Disable', 'success');
    }
    else {
      setMode('dark');
      document.body.style.background = '#01082b'
      funcShowAlert('Dark Mode Enable', 'success');
    }
  };

  //Alert functions
  const [alert, setAlert] = useState(null);
  const funcShowAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type
    })
    setTimeout(() => {
      setAlert(null);
    }, 1500);
  };

  //Custom color alert
  const funcCustomColorAlrt = () => {
    funcShowAlert('Enable Dark Mode first', 'warning');
  };
  return (
    <>
      <Router>
        <Navbar title="TextUtils" mode={mode} funcToggleMode={funcToggleMode} customColorAlrt={funcCustomColorAlrt} />
        <Alert alert={alert} />
        <Routes>
          <Route path="/about" element={<About mode={mode} />} />
          <Route path="/" element={<TextArea heading='Enter Text Here' mode={mode} showAlert={funcShowAlert} />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
