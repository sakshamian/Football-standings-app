import React, { useEffect, useState } from 'react'
import '../App.css'
import axios from 'axios'


export const Leagues = () => {
    const [ data, setData ] = useState([]);

    useEffect(()=>{
        axios('https://api-football-standings.azharimm.site/leagues')
        .then((res)=>{
            console.groupCollapsed(res.data.data);
            setData(res.data.data);
        });
    }, []);

    return (
        <div className='leagues-container'>
            {data.map((data) => (
                <div key={data.id} className="league-div">
                    <img src={data.logos.light} alt="logo"/>
                    <h2>{data.name}</h2>
                </div>
            ))}
        </div>
    )
}
