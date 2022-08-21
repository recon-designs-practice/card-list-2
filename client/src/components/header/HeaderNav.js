import React from 'react'
import styled from 'styled-components'

const Nav = styled.nav`
  // padding: 0px;
  // margin: 0px;
  // border: 1px solid orange;
`

const NavList = styled.ul`
  margin: 0px;
  padding: 0px;
  display: flex;
  gap: 12px;
  list-style-type: none;
  // background: lightgray;
`

const NavListItem = styled.li`
  padding: 4px 12px 4px 12px;
  font-family: 'Mulish';
  font-style: normal;
  font-weight: 500;
  font-size: 20px;
  line-height: 24px;
  color: #2D2E31;
  border-radius: 2px;
  // border: 1px dashed green;

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
        {links.map((link, idx) => <NavListItem key={idx}>{link.text}</NavListItem>)}
      </NavList>
    </Nav>
  )
}
