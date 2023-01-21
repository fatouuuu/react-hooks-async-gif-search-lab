import React,{ useState,useEffect} from 'react'
import GifList from './GifList'
import GifSearch from './GifSearch'
const GifListContainer = () => {

    const[gif, setGif] = useState([])
    const [search, setSearch] = useState();
    
    const apiKey='rvt8DVZnVqnm2mJZbUX2jdTR7v3ybde5';

    useEffect(()=>{
        fetch(`https://api.giphy.com/v1/gifs/search?q=${search}&api_key=${apiKey}&rating=g`)
        .then((res)=>res.json())
        .then(({data})=>{
            const gifs = data.slice(0,3).map((gif) => ({ url: gif.images.original.url }));
            setGif(gifs);
            
        })
    
    },[search])


  return (
    <div className='gif-container'>
     <GifList  gifs={gif} />
      <GifSearch onSubmit={setSearch} />
    </div>
  )
}

export default GifListContainer