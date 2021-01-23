import React from "react";
import Category from './Category'

export default function CocktailCategoryList({cocktailCategories, loading}) {
  
  if(loading) {
    return <h2 className="section-title">Loading...</h2>
  }

  if (cocktailCategories.length < 1) {
    return <h2 className="section-title">no cocktails matched your search criteria</h2>
  }
  return (
  <section className="section">
      <h2 className="section-title">Drink categories</h2>
      <div className="cocktails-center">
        {cocktailCategories.map(item => {
          return <Category Category key={item.id} {...item} />
        })}  
      </div> 
  </section>
  )
}
