import React from 'react'
import SocialIcons from '@/components/SocialIcons'
import About from '@/sections/About'
import Hero from '@/sections/Hero'
import Navbar from '@/sections/Navbar'
const Index = () => {
  return (
    <div className="app">
      <Navbar />
      <main>
        <Hero />
        <About />
      </main>
      <SocialIcons />
    </div>
  )
}

export default Index
