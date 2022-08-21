import React from 'react'

export default function HeaderNav(props) {
  const { links } = props

  return (
  <nav>
    <ul>
      {links.map((link, idx) => <li key={idx}>{link.text}</li>)}
    </ul>
  </nav>
  )
}
