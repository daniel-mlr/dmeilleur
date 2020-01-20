import React from 'react'
import { Link } from 'gatsby'
import styled from 'react-emotion'

const ContainerNav = styled.nav`
  ${tw`bg-grey-light px-32 py-8`};
`
const Nav = styled.div`
  ${tw`flex flex-wrap items-center justify-between`}
`

const Title = styled.h1`
  ${tw`text-grey-darkest m-0`};
  font-variant: small-caps;
`
const StyledLink = styled(Link)`
  ${tw`no-underline text-inherit`};
`

const Header = ({ siteTitle }) => (
  <ContainerNav>
    <Nav>
      <StyledLink to="/">
        <Title>{siteTitle}</Title>
      </StyledLink>
      <div>
        Menu 1
      </div>
    </Nav>
  </ContainerNav>
)

export default Header
