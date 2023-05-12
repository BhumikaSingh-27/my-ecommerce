import React from 'react'
import "./Category.css"

const Category = ({name}) => {
  return (
    <div>
        <div class="category-card">
         <div className="category-card-content"><h3>{name}</h3></div>   
        </div>

    </div>
  )
}

export default Category