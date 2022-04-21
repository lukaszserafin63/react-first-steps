import React, { useState } from 'react'

const App = () => {
  const getRandomNumber =()=>{
    setNumber(Math.round(Math.random()*2137));
  } 
  const [sentence,setSentence]= useState("que");
  const [number,setNumber] = useState(2137);
  return (
    <div>
      <h1>jelo mordo jestem leszek</h1>
      {number}
      <button onClick={()=>getRandomNumber()}>JEBAC KOLARZA</button>
    <input type="number" value={sentence} onChange={(e)=>setSentence(e.target.value)} />
    <h1>{sentence}</h1>
    </div>
  )
}

export default App