import React from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'

const Nav = styled.nav`

`

const NavList = styled.ul`
  margin: 0px;
  padding: 0px;
  display: flex;
  gap: 12px;
  list-style-type: none;
`

const NavListItem = styled.li`
  padding: 4px 12px 4px 12px;
  border-radius: 2px;

  & > a {
    font-family: 'Mulish';
    font-style: normal;
    font-weight: 500;
    font-size: 20px;
    line-height: 24px;
    color: #2D2E31;
    text-decoration: none;
  }

  &:hover {
    cursor: pointer;
    background: lightgray;
  }
`

export default function HeaderNav(props) {
  const { links } = props

  return (
    <Nav>
      <NavList>
        {links.map((link, idx) => <NavListItem key={idx}><Link to={link.path}>{link.text}</Link></NavListItem>)}
      </NavList>
    </Nav>
  )
}
