import React from 'react'
import styled from 'react-emotion'
// import Plain from '../../assets/data-sc1-plain.svg'
import Plain from '../../assets/data-sc-boxy.svg'

const Purpose = styled.p`
  ${tw`uppercase tracking-loose w-full`}
`
const MainHero = styled.h1`
  ${tw`my-4 leading-light`}
`
const Container = styled.div`
  ${tw`container mx-auto flex flex-wrap`}
`
const LeftCol = styled.div`
  ${tw`flex flex-col w-full md:w-2/5`}
`
const RightCol = styled.div`
  ${tw`w-full md:w-3/5`}
`

const Hero = () => {
  return (
    <section>
      <Container>
        <LeftCol>
          <Purpose>Modernize your processes</Purpose>
          <MainHero>Machine Learning</MainHero>
          <MainHero>Data Analytics</MainHero>
          <MainHero>Visualisations</MainHero>
          <MainHero>Jamstack Web Development</MainHero>
        </LeftCol>
        <RightCol>
          <Plain />
        </RightCol>
      </Container>
    </section>
  )
}

export default Hero