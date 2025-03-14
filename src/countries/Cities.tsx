import React from 'react'



export const Cities = () => {
    const cities: string[] = ["sweden", "norway", "dammark"]

    return (
    <div>
        {
            cities.map((value, index)=> <h3 key={index}>{value}</h3>)
        }
    </div>
  )
}
