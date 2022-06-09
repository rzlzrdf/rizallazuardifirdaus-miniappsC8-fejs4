import React from 'react'
import CardItem from './CardItem'
import './Card.css'

const Card = () => {
  return (
    <div className='cards'>
       <h1>Checkout these EPIC Destinatios!</h1>
       <div className='cards__container'>
          <div className='cards__wrapper'>
             <ul className='cards__item'>
                <CardItem src='images/img-9.jpg' text='Explore the hidden water deep inside the Amazon Jungle' label='#Adventure' path='/services' />
                <CardItem src='images/img-2.jpg' text='Travel through the Island of Bali in a Private Cruise' label='#Luxury' path='/services' />
             </ul>
          </div>
       </div>
    </div>
  )
}

export default Card