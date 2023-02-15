import React from 'react'
import Home from '../components/MainPage/Home'
import FlashDeals from '../components/flashDeals/FlashDeals'
const pages = ({ productsItems }) => {
  return (
    <>
      <Home />
      <FlashDeals productsItems={productsItems} />
    </>
  )
}

export default pages
