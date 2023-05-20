import React from 'react'
import Button from '@/components/Button'
const Hero = () => {
  return (
    <div className="hero">
      <h1 className="hero-title">Hi my name is</h1>
      <h2 className="hero-title-large">OH young-jae</h2>
      <h3 className="hero-title-large hero-title-sub">Front-end Developer</h3>
      <p className="hero-text">
        - React와 TypeScript 을 기반으로 사이드 프로젝트를 통해 웹/앱 서비스의 프론트엔드 설계, 개발 경험이 있습니다.
        <br></br> - 백엔드와 협업 경험이 있어 서버와 클라이언트 간의 통신 방식을 이해하고 있습니다.<br></br>-
        디자이너로서의 경험과 다수의 UI 구현 경험으로 사용자 인터렉션에 대한 이해도가 있습니다.
      </p>
      <div className="hero-button">
        <Button text="Go Project" link="/project" />
      </div>
    </div>
  )
}

export default Hero
