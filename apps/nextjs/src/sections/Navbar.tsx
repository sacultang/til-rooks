import Link from 'next/link'
import React from 'react'
import Button from '@/components/Button'
import Logo from '@/components/Logo'
const Navbar = () => {
  return (
    <nav>
      <div className="wrapper">
        <div className="brand">
          <Link href="/">
            <Logo />
          </Link>
        </div>
        <div className="nav-items">
          <ul className="nav-items-list">
            {sectionLinks.map(({ name, link }) => (
              <li key={name} className="nav-items-list-item">
                <Link href={link} className="nav-items-list-item-link">
                  {name}
                </Link>
              </li>
            ))}
          </ul>
          <div className="nav-items-button">
            <Button text="resume" link="http://localhost:3000/resume.pdf" />
          </div>
        </div>
      </div>
    </nav>
  )
}

export default Navbar
const crateLink = (name: string, link: string) => ({ name, link })
const sectionLinks = [crateLink('About', '/about'), crateLink('Experience', '/experience'), crateLink('Work', '/work')]
