import React, {useState, useEffect} from 'react';
import {getItems} from "./airtable.js"

export default function Summary({animal}) {
  let [data, setData] = useState();

  useEffect(async () => {
    let items = await getItems();
    console.log(items.data.records);
    let allRecords = new Map();

    items.data.records.forEach(function(element, index) {
      if (allRecords.has(element.fields.result)) {
        console.log("again");
        allRecords.set(
          element.fields.result,
          (allRecords.get(element.fields.result) + 1)
        )
        
      } else {
        allRecords.set(element.fields.result, 1);
      }
    })

    setData(allRecords);
  }, [])
  
  return (
    <div>
      <h1>You are: {animal}</h1>
      <p>Your traits are: currently unavailible...learn more here: <a href="https://www.myrelationshipcenter.org/resources/personality-animal-profiles" target="_blank">here</a></p>
      <h2>Other People's Results:</h2>
      { (data !== undefined) ? (
        [...data.keys()].map((k) => <p>{k}: {data.get(k)}</p>)
      ) : <p>bad</p> }
    </div>
  )
}
