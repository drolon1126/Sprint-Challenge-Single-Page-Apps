import React, { useEffect, useState } from 'react';
import axios from 'axios';
import CharacterCard from './CharacterCard';

export default function CharacterList() {
  // TODO: Add useState to track data from useEffect
  const [charList, setCharList] = useState([]);
  const [pageNo, setPageNo] = useState('1');

  useEffect(() => {
    // TODO: Add AJAX/API Request here - must run in `useEffect`
    //  Important: verify the 2nd `useEffect` parameter: the dependancies array!
    axios.get(`https://rickandmortyapi.com/api/character/?page=${pageNo}`)
    .then(data=>{
      console.log(data);
      setCharList(data.data.results);
    })
    .catch( err => {
      console.log("Error:", err);
    })    
  }, [pageNo])

  return <section className='character-list grid-view'>

      {charList.map((char)=>{
        return(
          <div>
            <CharacterCard char={char}/>
          </div>
        );
      })}

    </section>

}
