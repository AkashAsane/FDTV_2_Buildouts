import React, { useEffect, useState } from 'react';
import axios from "axios";
import './App.css';

function  Countrysearch() {

      const [data,setData]=useState([]);
      const[query,setQuery]=useState('');
      const[error,setError]=useState(null);

      useEffect(()=>{
        axios.get("https://restcountries.com/v3.1/all").then((response) => {
          setData(response.data);
          console.log(response.data);
        })
        .catch(error=>{
          setError(error.messgage);
          console.log("error",error);
        })
    
      },[]);


      const filteredCountries=data.filter((country)=>country.name.common.toLowerCase().includes(query.toLowerCase()))
      console.log(filteredCountries);
         
      return(
        <div className='main'>
            <div className='navbar'>
                <input
                type='text'
                placeholder='Search countries...'
                onChange={(e)=>setQuery(e.target.value.toLowerCase())}
                className='inputtxt'
                />
            </div>
            <div className='countryWrapper'>
                {   filteredCountries.length ===0 && query !=='' ?(
                    <p>no countries found</p>
                ): (
                     filteredCountries.map(country=> (
                        
                            <div className='countryCard'>
                              <img
                                 src={country.flags.svg}
                                 alt={country.name.common}
                                 className='flag'
                              />
                              <p className='countryName'>{country.name.common}</p>
                            </div>
                     ))
                )}
            </div>
        </div>
      )
}

export default Countrysearch;
