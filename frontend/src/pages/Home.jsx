import React from 'react'
import Stroies from '../components/Stroies'
import Posts from '../components/Posts'
import Share from '../components/share/Share'

const Home = () => {
  return (
     <div>
      <Stroies/>
      <Share/> 
      <Posts/>
     </div>
  )
}

export default Home