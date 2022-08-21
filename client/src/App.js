import React from 'react'
import { Routes, Route } from 'react-router-dom'
import styled from 'styled-components'
import { 
  AddCardPage, 
  HomePage, 
  ViewCardsPage, 
  ViewBrandsPage 
} from './pages'
import { Header } from './components'
import HeaderNav from './components/header/HeaderNav'

const AppContainer = styled.div`
  border: 2px solid red;
`

const Main = styled.main`
  // background: blue;
`

const linksArr = [
  {text: 'Home', path: '/'},
  {text: 'Add card', path: '/add-card'},
  {text: 'Brands', path: '/view-brands'},
  {text: 'Cards', path: '/view-cards'}
]

function App() {
  return (
    <AppContainer>
      <Header title={'Skaggs cards'}>
        <HeaderNav links={linksArr} />
      </Header>
      <Main>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/add-card" element={<AddCardPage />} />
          <Route path="/view-brands" element={<ViewBrandsPage />} />
          <Route path="/view-cards" element={<ViewCardsPage />} />
        </Routes>
      </Main>
    </AppContainer>
  );
}

export default App;
