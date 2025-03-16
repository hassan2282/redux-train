import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';

function Hello() {
  const items = useSelector((store) => store);
  const dispatch = useDispatch();
  const [randomNum, setRandomNum] = useState([]);

  useEffect(() => {
    const interval = setInterval(() => {
      const newNum = Math.floor(Math.random() * 100);
      setRandomNum(prev => [...prev, newNum]);
      dispatch({ type: "ADD", payload: newNum });
    }, 2000);

    return () => clearInterval(interval);
  }, [dispatch]);

  return (
    <button className='p-2 rounded-md bg-sky-950 text-white'>
      Click Me! ({items.length} numbers added)
    </button>
  )
}

export default Hello;