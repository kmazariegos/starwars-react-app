import React from 'react';  
import { Link } from "react-router-dom"; 
import { useSelector, useDispatch } from 'react-redux';

import { resetAll } from "./actions/reset";

//this loads the homepage and depending on if there are films stored or not it will reset the button or not whwne clicked

function HomePage() {
  const loaded = useSelector(st => st.films[1] !== undefined);
  console.log(loaded, "loaded")
  const dispatch = useDispatch();

  function reset() {
    dispatch(resetAll());
  }
  
  return (
    <>
      {loaded ? ( 
        <button
          className="btn btn-danger btn-block btn-lg"
          onClick={reset}
        >
          Reset To Fresh Exploration
        </button>
      ) : (
        <Link to="/films/1" className="btn btn-primary btn-block btn-lg">
          Start with &ldquo;A New Hope&rdquo;
        </Link>
      )}
      <img
        className="mt-3 mb-5 w-100"
        alt="StarWars.ly"
        src="https://vignette.wikia.nocookie.net/starwars/images/c/cc/Star-wars-logo-new-tall.jpg"
      />
    </>
  );
}

export default HomePage;
