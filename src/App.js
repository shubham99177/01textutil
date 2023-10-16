import { useState, useEffect } from 'react';
import './App.css';

function App() {

  const [count, setcount] = useState(0)
  const [check, setcheck] = useState(2)
  useEffect(() => {
    if (count >= 1) {
      document.title = `chat(${count})`

    } else {
      document.title = `chat`
    }
    console.log("inside");
  }, [count])

  useEffect(() => {
    console.log("shubham rathore , outside");
  },[check])

  // const [wirthcount, setwirthcount] = useState(window.screen.width)
  // useEffect(() => {

  //   window.addEventListener('resize', () => {
  //     setwirthcount(window.screen.width)
  //   })
  //   return () => {
  //     window.removeEventListener('resize', () => {
  //       setwirthcount(window.screen.width)
  //     })
  //   }
  // },[])
  return (
    <>
      <h1>{count}, {check}</h1>
      <button onClick={() => { setcount(count + 1) }}>click</button>
      <button onClick={() => { setcheck(check + 1) }}>click</button>
      {/* <p>this is the screen wirth</p>
      <h1>{wirthcount}</h1> */}
    </>
  );
}

export default App;
