import React from 'react'
import { Router, Routes, Route} from 'react-router'
import Home from '../home'
import About from '../About'
import Contact from '../contact/contact'
import styles from "./style.css"
const Header = ({title}) => {
  return (
    <>
    <div className='header'>
    <a href="/">Home</a>
    <a href="/about">About</a>
    <a href="/contact">Contact</a>

    </div>
    </>

  )
}

export default Header