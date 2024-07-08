import React, { useState } from 'react'
import {BiSearch,BiCurrentLocation} from "react-icons/bi"

const Inputs = ({setQuery,setUnits}) => {

    const [city,setCity]=useState('');


    const handleSearchClick = () =>{
    if (city !=="") setQuery({ q: city });
    };

    const hanldeLocationClick = () =>{
        if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition((position) => {
            const {latitude, longitude} = position.coords
            setQuery ({lat: latitude, lon:longitude})
        })
        }
    }


    return (
    <div className="flex flex-row w-3/4 items-center justify-center space-x-4">
        <input
        type="text"
        placeholder="search by city..."
        className=" text-gray-500 text-xl font-light p-2 w-full shadow-xl
        capitalize focus:outline-none placeholder:lowercase"
        onChange={(e)=> setCity(e.currentTarget.value)}
        />
        <BiSearch
        size={40}
        className="cursor-pointer transition ease-out hover:scale-150"
        onClick={handleSearchClick}
        
        />
        <BiCurrentLocation
        size={40}
        className="cursor-pointer transition ease-out hover:scale-150"
        
        />

        <div className="flex flex-row w-1/4 items-center justify-center">
        <button className="text-2xl font-medium transition ease-out
        hover: scale-150"
        onClick={()=>setUnits("metric")}
        >
        °C
        </button>
        <p className="text-2xl font-medium mx-1 px-2"> | </p>
        <button className="text-2xl font-medium transition ease-out
        hover: scale-150"
        onClick={()=>setUnits("imperial")}>
        °F
        </button>
        </div>
    </div>
    );
}
export default Inputs