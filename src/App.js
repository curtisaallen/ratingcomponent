import React, { useState } from "react";
import './App.css';
import Home from "./components/Home";
import Thanks from "./components/Thanks";

function App() {
  const [rating] = useState([1,2,3,4,5]);
  const [rate, setRate] = useState('');
  const [submit, setSubmit] = useState(true)
  function ratingSet(num) {
    setRate(num)
  }
  function submitForm() {
    if(rate === '') {
      alert('Please select a rating')
    } else {
      setSubmit(false) 
    } 
  }
  return (
  <div className="flex h-screen justify-center items-center space-x-4">
    {(submit) ? <Home rating={rating} onClickRBT={ratingSet} onSubmit={submitForm} /> : <Thanks rating={rating}  rate={rate} />}   
  </div>
  );
}

export default App;
