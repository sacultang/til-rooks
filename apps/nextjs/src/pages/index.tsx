import React from 'react'
import CustomButton from '@/components/CustomButton'
import SocialIcons from '@/components/SocialIcons'
import About from '@/sections/About'
import Hero from '@/sections/Hero'
import Navbar from '@/sections/Navbar'

const Index = () => {
  return (
    <div className="app">
      <Navbar />
      <main>
        {/* <Hero />
        <About /> */}
        <CustomButton size="sm" className="bg-red-400">
          asdf
        </CustomButton>
        <button className="h-10">sadf</button>
      </main>
      <SocialIcons />
    </div>
  )
}

export default Index
