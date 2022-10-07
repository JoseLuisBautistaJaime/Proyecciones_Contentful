import React from 'react';
import { useState, useEffect } from "react";
import ContentfulService from "../../Http/Requests"
const fetchPromotions= async ()=>{
  let listItems=[];
  await ContentfulService.getPromotions().then((response)=>{
    let {data}=response.data;           
    listItems=data.promotionCollection.items;
    })
   
  return listItems;
};
export  function Promotions(){
    const [page, setPage] = useState(null);
    useEffect(() => {
      setPromotions();           
      }, []);
     const setPromotions =async ()=>{
      let PageData=[];
      PageData=await fetchPromotions();
      
      setPage(PageData);
     }
return(
    <div className="App">
        
    <div className="promotionsList">
    {
      page!== null && page !== "undefined"?
      page.map((x,i)=>{
        return(
          <a href={x.url} key={i} >
            <div className="imgpro">
              <img src={x.img.url} alt=""/>
            </div>              
            <div className='info'>                
              <h3 data-testid="title">{x.title}</h3>
              <p>{x.description}</p>
            </div>              
          </a>
          
        )
      }):'Cargando...'
    }
    </div>      
  </div>
)

}
    
    
