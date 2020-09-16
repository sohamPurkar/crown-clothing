import React from "react";
import "./menu-item.styles.scss";
import Directory from "../directory/directory.components";


const MenuItem=({title,imageUrl,size}) =>
{
    return(
     <div
      className={`${size} menu-item`}>
      <div className="background-image"
         style={
            {
                backgroundImage:`url(${imageUrl})`
            }
        }
        />
    <div className="content">
    <h1 className="title">{title}</h1>
    <span className="subtitle"> shop Now</span>
    </div>
    </div>
    )
}
export default MenuItem;