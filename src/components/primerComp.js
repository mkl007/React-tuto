import React from 'react'

export const  PrimerComp = () => {
    let mi_array = [
        "a",
        "b",
        "c",
        "d"
    ]
  return (
    <div>
        <h1>primerComp</h1>
        <p>loremispum</p>

        <h3>Array</h3>
        <ul>
            {
                mi_array.map((arr, indice)=>{
                    return(<li key={indice}>
                             {arr}
                           </li>)
                })
            }
        </ul>
    </div>
  )
}
