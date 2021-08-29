import React from 'react'
import CardClass from './Card.module.css'

const Card = (props) => {
  const classes = `${CardClass.card} ${props.className}`
  return <div className={classes}>{props.children}</div>
}

export default Card
