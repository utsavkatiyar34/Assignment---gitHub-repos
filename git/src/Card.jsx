import React, { useEffect } from 'react'
import './card.css'
export const Card=({id, description, html_url, name })=> {


  return (
    <div className='card-div'>
    <div>Name: {name}</div>
    <div>URL: <a src={html_url}>{html_url}</a></div>
    <div>{description}</div>
    <div>ID: {id}</div>
    </div>
  )
}
