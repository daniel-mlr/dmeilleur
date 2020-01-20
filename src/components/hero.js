import React from 'react'
import styled from 'react-emotion'

const Purpose = styled.p`
  ${tw`uppercase tracking-loose w-full`}
`
const MainHero = styled.h1`
  ${tw`my-4 leading-light`}
`

const Hero = () => {
  return (
    <section>
      <Purpose>Modernize your processes</Purpose>
      <MainHero>Machine Learning</MainHero>
      <MainHero>Data Analytics</MainHero>
      <MainHero>Visualisations</MainHero>
      <MainHero>Jamstack Web Development</MainHero>
    </section>
  )
}

export default Hero