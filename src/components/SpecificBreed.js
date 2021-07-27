import React, { useState, useEffect } from "react";
import { Link, useLocation} from "react-router-dom";

function SpecificBreed (){
  let location = useLocation();
  const breed = location.state.breed;

  const [state, setState] = useState([])
    useEffect(()  => {
      fetch(`https://dog.ceo/api/breed/${breed}/images`)
    .then(res => res.json())
    .then((data) => {
      setState({ doggo: data })
    })
    },[])

    return (
    <div>
      <Link to={{pathname: "/" }}>BACK</Link>
      <header>{breed}:</header>
      {/* this takes the state of all the images and randomizes them, then takes the first 4 from the randomized list */}
      {state.doggo? state.doggo.message.sort(() =>
      Math.random() - Math.random()).slice(0, 4).map((item, index) => {
        return (
          <img src={item} alt="doggo" width="200" height="200" key={index}></img>
        )}): <p></p>}
    </div>
  );

  }



export default SpecificBreed;

