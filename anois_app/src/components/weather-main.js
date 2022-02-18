import React from 'react';

export function WeatherMain({condition, temperature, location}){
    console.log("Condition", condition)
    return <div className='wmain'>    
        <div className='condition'>{condition.text}</div>    
        <div className='location-info'>
            <div className='location'>
                 <div className='temperature'>{temperature}<sup>o</sup>C</div>
                 <div className='location-title'>{location.name}. {location.country}</div>
            </div>
            <div className='icon'>
                <img src={condition.icon} alt="weather icon"></img>
            </div>
        </div>
    </div>
}