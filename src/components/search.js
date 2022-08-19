import axios from "axios";
import React , {useState ,useEffect}from "react";



const Search=()=>{
    const [term,setterm]=useState("Programing")
    const [debounceterm,setdebounceterm]=useState(term)
    const [results,setresult]=useState([])
    useEffect(()=>{
      const settimeoutid=setTimeout(()=>{
        setdebounceterm(term)
      },800);

      return()=>{
        clearTimeout(settimeoutid);
      };

    },[term])
    useEffect(()=>{
        const search=async()=>{
           const {data}= await axios.get('https://en.wikipedia.org/w/api.php',{
                params:{
                    action:'query',
                    list:'search',
                    origin:'*',
                    format:'json',
                    srsearch:debounceterm

                }
            })
            setresult(data.query.search);
        };
        search();
       
    },[debounceterm]);

    const renderresults=results.map((result)=>{
        return(
            <div key={result.pageid} className="item">
                <div className="right floated content">
                    <a href={`https:en.wikipedia.org?curid=${result.pageid}`} className="ui button">Go</a>
                </div>
                <div className="content">
                    <div className="header">
                        {result.title}
                    </div>
                    <span dangerouslySetInnerHTML={{__html:result.snippet}}></span>
                </div>
            </div>
        )
    })

    return(
        <div>
            <div className="ui form">
                <div className="field">
                    <label>Enter Search Term</label>
                    <input value={term} onChange={e=>{setterm(e.target.value)}} className="input" type='text'></input>
                </div>
            </div>
            <div className="ui celled list">
                {renderresults}
            </div>
        </div>
    )
}

export default Search;