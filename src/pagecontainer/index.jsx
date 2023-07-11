import React from 'react'
import Header from '../header'
import Footer from '../footer'

const PageContainer = ({children}) => {
  return (
    <>
    
    
    <Header/>
    <div>{children}</div>
    <Footer/>
    
    </>

  )
}

export default PageContainer