import React, {useState} from 'react'
import {newItem} from "./airtable.js"

export default function Quiz({setView}) {
  let animalScores = [0,0,0,0];
  let animals = ["lion", "otter", "beaver", "golden retriever"];
  let lionTraits = [
    "I take charge",
    "I am determined",
    "I am assertive",
    "I am enterprising",
    "I am firm",
    "I am cometitive",
    "I enjoy a good challenge",
    "I am bold",
    "I am purposeful",
    "I am a decicion maker",
    "I am a leader",
    "I am goal driven",
    "I am self reliant",
    "I am adventurous"
  ]

  let otterTraits = [
    "I take risks",
    "I am a visionary",
    "I am a motivator",
    "I am energetic",
    "I am very verbal",
    "I am a promoter",
    "I avoid details",
    "I am fun loving",
    "I like variety",
    "I enjoy change",
    "I am creative",
    "I am group oriented",
    "I am optimistic",
    "I mix well with others"
  ]

  let goldenTraits = [
    "I am loyal",
    "I am nondemanding",
    "I am even keel",
    "I avoid conflict",
    "I enjoy routine",
    "I dislike change",
    "I have deep relationships",
    "I am adaptable",
    "I am sympathetic",
    "I am thoughtful",
    "I am nurturing",
    "I am patient",
    "I am tolerant",
    "I am a good listener"
  ]

  let beaverTraits = [
    "I am deliberate",
    "I am controllable",
    "I am reserved",
    "I am predictable",
    "I am practical",
    "I am orderly",
    "I am factual",
    "I am discerning",
    "I am detailed",
    "I am analytical",
    "I am inquisitive",
    "I am percise",
    "I am persistent",
    "I follow a schedule"
  ]

  function incrementScore(input) {
    if (input) {
      if (input.target.value === "lion") {
        input.target.checked ? 
          animalScores[0] += 1 
          : animalScores[0] -= 1
      } else if (input.target.value === "otter") {
        input.target.checked ? 
          animalScores[1] += 1 
          : animalScores[1] -= 1
      } else if (input.target.value === "beaver") {
        input.target.checked ? 
          animalScores[2] += 1 
          : animalScores[2] -= 1
      } else if (input.target.value === "golden retriever") {
        input.target.checked ? 
          animalScores[3] += 1 
          : animalScores[3] -= 1
      }
    }
  
    console.log(animalScores);
  }

  function enterData() {
    let maxVal = 0;
    let maxIndex = 0;

    for (let i=0; i<4; i++) {
      if (animalScores[i] > maxVal) {
        maxVal = animalScores[i];
        maxIndex = i;
      }
    }

    let animal = "";

    for (let i=0; i<4; i++) {
      if (animalScores[i] === maxVal) {
        animal === "" ? animal += animals[i] : 
          (animal += ("/" + animals[i]) )
      }
    }

    console.log("You are an " + animal);

    newItem(animal).then(setView("summary"));
  }

  return (
    <div className="items">
      <h1>What are your traits?</h1>
      {
        lionTraits.map((i) => {
          return <div key={i}>
            <input type="checkbox" value="lion" onChange={(e) => incrementScore(e)}/>
            <label>{i}</label>
          </div>
        })
      }
      {
        otterTraits.map((i) => {
          return <div key={i}>
            <input type="checkbox" value="otter" onChange={(e) => incrementScore(e)}/>
            <label>{i}</label>
          </div>
        })
      }
      {
        goldenTraits.map((i) => {
          return <div key={i}>
            <input type="checkbox" value="golden retriever" onChange={(e) => incrementScore(e)}/>
            <label>{i}</label>
          </div>
        })
      }
      {
        beaverTraits.map((i) => {
          return <div key={i}>
            <input type="checkbox" value="beaver" onChange={(e) => incrementScore(e)}/>
            <label>{i}</label>
          </div>
        })
      }
      <button onClick={enterData}>Submit</button>
    </div>
  )
}
