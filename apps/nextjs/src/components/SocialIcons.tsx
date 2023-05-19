import Link from 'next/link'
import React from 'react'
import { FiGithub } from 'react-icons/fi'
import { SiHexo } from 'react-icons/si'
const SocialIcons = () => {
  return (
    <div className="social-icons">
      <ul className="social-icons-list">
        {socialLinks.map(social => (
          <li key={social.name} title={social.name} className="social-icons-list-item">
            <Link href={social.link} className="social-icons-list-item-link" target="_blank" rel="noopener noreferer">
              {social.icon}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default SocialIcons

const createSocialLink = (name: string, icon: React.JSX.Element, link: string) => ({ name, icon, link })
const socialLinks = [
  createSocialLink('Github', <FiGithub />, 'https://github.com/sacultang'),
  createSocialLink('Blog', <SiHexo />, 'https://sacultang.github.io/'),
]
