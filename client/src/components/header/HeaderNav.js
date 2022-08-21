import React from 'react'

export default function HeaderNav(props) {
  const { links } = props
  console.log(links)
  return (
  <nav>
    <ul>
      {links.map((link) => <li>{link.text}</li>)}
    </ul>
  </nav>
  )
}
