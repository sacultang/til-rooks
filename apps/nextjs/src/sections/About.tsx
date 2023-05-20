import Image from 'next/image'
import React from 'react'
const About = () => {
  return (
    <div className="about" id="about">
      <div className="title">
        <h2>About Me</h2>
      </div>
      <div className="about-grid">
        <div className="about-grid-info">
          <p className="about-grid-info-text">
            안녕하세요! Lorem ipsum dolor sit amet consectetur, adipisicing elit. Aspernatur asperiores neque
            consequatur ipsa facere. Aspernatur praesentium saepe, cupiditate corporis fuga consectetur magni. Nam rem
            ducimus aliquid reiciendis unde sequi cum?
          </p>
          <p className="about-grid-info-text">
            프론트엔드 개발자 Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam nesciunt harum suscipit ut
            minima, dignissimos a! Quia voluptates atque eaque ipsam quam sed sunt. Magnam rem accusamus nostrum
            architecto soluta.
          </p>
          <p className="about-grid-info-text">
            오영재 입니다. Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime distinctio libero dolorem
            similique iure? Nesciunt reiciendis autem asperiores tenetur saepe possimus ullam vel praesentium quasi
            nihil! Laudantium magni voluptatum aliquam.
          </p>
          <ul className="about-grid-info-list">
            <li className="about-grid-info-list-item">React</li>
            <li className="about-grid-info-list-item">JavaScript</li>
            <li className="about-grid-info-list-item">TypeScript</li>
            <li className="about-grid-info-list-item">Next.js</li>
            <li className="about-grid-info-list-item">Redux Toolkit</li>
            <li className="about-grid-info-list-item">CSS</li>
          </ul>
        </div>
        <div className="about-grid-photo">
          <div className="overlay"></div>
          <div className="overlay-border"></div>
          <div className="about-grid-photo-container">
            <Image src="/next.svg" fill alt="profile" />
          </div>
        </div>
      </div>
    </div>
  )
}

export default About
