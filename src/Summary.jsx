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
      <div class="types">
        <h2>🦁 Lions</h2>
        <p>Lions take charge. They like short answers and do not like being controlled by others.</p>
        <h2>🦦 Otters</h2>
        <p>Otters are outgoing. They enjoy being with others and are enthusiastic.</p>
        <h2>🐕 Golden Retrievers</h2>
        <p>Golden retrievers are loyal and trustworthy. They like to help others and are friendly.</p>
        <h2>🦫 Beavers</h2>
        <p>Beavers are quite and like to work alone.</p>
        <h2>Learn more...</h2>
        <p>Learn more here: <a href="https://www.myrelationshipcenter.org/resources/personality-animal-profiles" target="_blank">here</a></p>
      </div>
      <h2>Other People's Results:</h2>
      { (data !== undefined) ? (
        [...data.keys()].map((k) => <p>{k}: {data.get(k)}</p>)
      ) : <p>bad</p> }
    </div>
  )
}
