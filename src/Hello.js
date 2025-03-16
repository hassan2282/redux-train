import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';

function Hello() {

  const item = useSelector((store) => store);
  const dispatch = useDispatch();

  const [RandomNum, setRandomNum] = useState([])

  useEffect(() => {
    const interval = setInterval(() => {
      setRandomNum(prevRandomNum => [...prevRandomNum, Math.floor(Math.random() * 100)])
    }, 2000);

    return () => clearInterval(interval);
  }, []);


  return (

      <button onClick={()=>{dispatch({type: "ADD", payload: RandomNum})}} className='p-2 rounded-md bg-sky-950 text-white'>Click Me!</button>

  )
}

export default Hello;
