import React, { useEffect, useState } from 'react';
import axios from 'axios';
import EpisodeCard from './EpisodeCard';

export default function LocationsList() {
  const [epList, setEpList] = useState([]);
  const [pageNo, setPageNo] = useState('1');

  useEffect(() => {
    axios.get(`https://rickandmortyapi.com/api/episode/?page=${pageNo}`)
    .then(data=>{
      console.log(data);
      setEpList(data.data.results);
    })
    .catch( err => {
      console.log("Error:", err);
    })    
  }, [pageNo])

  return <section className='episode-list grid-view'>

      {epList.map((ep)=>{
        return(
          <div>
            <EpisodeCard ep={ep}/>
          </div>
        );
      })}

    </section>

}
