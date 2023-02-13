import React from 'react'
import Home from '../components/mainpage/Home'
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
