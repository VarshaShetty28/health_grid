import React from 'react'
import Header from '../components/Header'
import SpecialityMenu from '../components/SpecialityMenu'
import TopDocters from '../components/TopDocters'
import Banner from '../components/Banner'
import Footer from '../components/Footer'

const Home = () => {
  return (
    <div>
      <Header/>
      <SpecialityMenu/>
      <TopDocters/>
      <Banner/>
    </div>
  )
}

export default Home
