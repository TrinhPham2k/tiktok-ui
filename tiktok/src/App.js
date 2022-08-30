import {useState} from 'react'

const gifts = [
  'cii9',
  'Ram',
  'RBB'
]
function App() {
    const [gift, setGift] = useState()
    const randon = ()=>{
     
      const index= Math.floor(Math.random() * gifts.length)
      setGift(gifts[index])
    }

  return (
    <div className="App">
      <h1>{gift || "chua co phan thuong"}</h1>
      <button onClick={randon} >Lay thuong</button>
    </div>
  );
}

export default App;
