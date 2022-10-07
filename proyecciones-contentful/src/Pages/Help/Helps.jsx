import React from 'react';
import { useState, useEffect } from "react";
import ContentfulService from "../../Http/Requests"

export function Helps(){
    const [page, setPage] = useState(null);
    useEffect(() => {
        ContentfulService.getHelps().then((response)=>{
            let {data}=response.data;           
            setPage(data.ayudaCollection.items);
            
        })
      }, []);
     
    return(
        <div className="App">
         
    <div className="helps typetwo">
    {
      page!== null && page !== "undefined"?
      page.map((x,i)=>{
        return(
          <a href={x.permalink} key={i} >
            
            <div className='info'>
            <img src='duda.svg' alt=''/>
                <p>{x.title}</p>
            </div>                          
          </a>
          
        )
      }):'Cargando...'
    }
    </div>      
  </div>
    )
}
    
