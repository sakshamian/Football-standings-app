import React , { useState } from 'react'
import '../App.css'
import { Leagues } from './Leagues'
import { Standings } from './Standings'

export const Content = () => {

    const [active, setActive] = useState(true);

    return (
        <div className='content-container'>
            <div className='tabs'>
                <div className='tab-leagues' onClick={()=> setActive(true)}
                    style={{backgroundColor: active ? "#36454F" : null}}
                    >
                    <h2>Leagues</h2>
                </div>
                <div className='tab-standings' onClick={()=> setActive(false)}
                    style={{backgroundColor: !active ? "#36454F" : null}}
                    >
                    <h2>Standings</h2>
                </div>
            </div>
            {active? <Leagues/> : <Standings/>}
        </div>
    )
}
