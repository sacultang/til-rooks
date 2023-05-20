import React from 'react'
import SocialIcons from '@/components/SocialIcons'
import Hero from '@/sections/Hero'
import Navbar from '@/sections/Navbar'
const Index = () => {
  return (
    <div className="app">
      <Navbar />
      <main>
        <Hero />
      </main>
      <SocialIcons />
    </div>
  )
}

export default Index
