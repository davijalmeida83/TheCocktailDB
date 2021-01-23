import React from "react"
import {Link} from 'react-router-dom'

export default function Cocktail({ name }) {
  const  urlVar  = `/drinks/${JSON.stringify({"name":encodeURIComponent(name)})}`;
  
  return <article className="cocktail">
    <div className="cocktail-footer">
      <h3>{name}</h3>        
        <Link  to={urlVar} className="btn btn-primary btn-details">details</Link>
    </div>
  </article>
}
