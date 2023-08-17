import { useState,useEffect } from "react";

function Main(){
    const[active,setActive]=useState(null);
    const[confirmed,setConfiremed]=useState(null);
    const[deaths,setDeaths]=useState(null);
    const[deltaconfirmed,setDeltaconfirmed]=useState(null);
    const[deltadeaths,setDeltadeaths]=useState(null);
    const[deltarecovered,setDeltarecovered]=useState(null);
    const[recovered,setRecovered]=useState(null);
    const[time,setTime]=useState(null);

    const getCovidData=async()=>{
        try{
            const res=await fetch("https://data.covid19india.org/data.json");
            const data=await res.json();

            setActive(data.statewise[0].active);
            setConfiremed(data.statewise[0].confirmed);
            setDeaths(data.statewise[0].deaths)
            setDeltaconfirmed(data.statewise[0].deltaconfirmed)
            setDeltadeaths(data.statewise[0].deltadeaths)
            setDeltarecovered(data.statewise[0].deltarecovered)
            setRecovered(data.statewise[0].recovered)
            setTime(data.statewise[0].lastupdatedtime)
        }
        catch(err){
            console.log(err)
        }
    }
    useEffect(()=>{
        getCovidData();
    },[])
    return(
        <div className="Main">
            <h3>
                <strong>Total Active cases :</strong>{active}
            </h3>
            <h3>
                <strong>Total Confirmed cases :</strong>{confirmed}
            </h3>
            <h3>
                <strong>Total Deaths :</strong>{deaths}
            </h3>
            <h3>
                <strong>Total Deltaconfirmed cases :</strong>{deltaconfirmed}
            </h3>
            <h3>
                <strong>Total Deltadeaths :</strong>{deltadeaths}
            </h3>
            <h3>
                <strong>Total Deltarecovered :</strong>{deltarecovered}
            </h3>
            <h3>
                <strong>Total Recovered cases :</strong>{recovered}
            </h3>
            <br/>
            <br/>
            <p>last-updated {time}</p>
        </div>
    )
}
export default Main;