import React from 'react'
import css from '../SixCard/SixCard.module.css'

export  const SixCard = ({title,bg,img}) => {


    return(
   <div style={{backgroundColor:bg ,backgroundImage:img}} className={css.sixCard}>
       <hr/>
       <h3>{title}</h3>
   </div>
    )
}