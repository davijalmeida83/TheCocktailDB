import React from "react";
import Cocktail from './Cocktail'
import {Link} from 'react-router-dom'

export default function CocktailList({categoryName, cocktails, loading}) {
  
  if(loading) {
    return <h2 className="section-title">Loading...</h2>
  }
  if (cocktails.length < 1) {
    return <h2 className="section-title">no drinks matched for {categoryName}</h2>
  }
  return (
    
  <section className="section">      
      <div  className="error-container">
        <Link to="/" className="btn btn-primary">Back home</Link>
      </div>
      
      <h2 className="section-title">Drinks {categoryName}</h2>
      
      <div className="cocktails-center">      
        {cocktails.map(item => {
          return <Cocktail key={item.id} {...item} />
        })}  
      </div> 
  </section>
  )
}
