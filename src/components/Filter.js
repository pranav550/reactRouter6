import React from 'react'
import { useSearchParams } from 'react-router-dom'

const Filter = () => {
    const [searchParams,setSearchParams]= useSearchParams();
    console.log(searchParams.get('age'))
    console.log(searchParams.get('city'))
    const age = searchParams.get('age');
    const city = searchParams.get('city');
  return (
    <div>
      <h1>Filter Page</h1>
      <p>Age is :{age}</p>
      <p>City is :{city}</p>
      <input type="text" onChange={(e)=>setSearchParams({city:e.target.value, age:10})} 
      placeholder='Set Text in query params'/>
      <button onClick={()=>setSearchParams({age:40})}>Set Age</button>
    </div>
  )
}

export default Filter