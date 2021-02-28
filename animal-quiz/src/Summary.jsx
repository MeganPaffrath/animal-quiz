import React, {useState, useEffect} from 'react';
import {getItems} from "./airtable.js"

export default function Summary() {
  let [data, setData] = useState();
  let [update, setUpdate] = useState(0);

  useEffect(() => {
    getItems().then((res) => {
      setData(res);
    });
  }, [])

  useEffect(() => {
    // console.log(data);
    setUpdate(1);
  }, [data])

  // console.log(data);

  if (data !== undefined) {
    console.log(data )
    console.log(data.entries());
  }
  
  return (
    <div>
      <h1>Summary</h1>
      <p>Update: {update}</p>
      { data !== undefined ? 
        <p>Size: {data.size}</p>
        : <p>undefined</p>}
      { (data !== undefined) ? (
        data.forEach(function(value, key) {
          return <p>{key}</p>
        })  
      ) : <p>bad</p>}
    </div>
  )
}
