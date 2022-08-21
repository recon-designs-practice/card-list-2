import React from 'react'
import { Routes, Route } from 'react-router-dom'
import styled from 'styled-components'
import { 
  AddCardPage, 
  HomePage, 
  ViewCardsPage, 
  ViewBrandsPage 
} from './pages'
import { Header } from './components/header'
import HeaderNav from './components/header/HeaderNav'

const AppContainer = styled.div`
  display: grid;
  grid-template-columns: 80px repeat(12, 1fr) 80px;
  grid-template-rows: auto;
  border: 2px solid red;
`

const Main = styled.main`
  grid-column: 2 / 14;
  display: grid;
  grid-template-columns: repeat(12, 1fr);
  grid-template-rows: auto;
  background: lightblue;
`

const linksArr = [
  {text: 'Home', path: '/'},
  {text: 'Add card', path: '/add-card'},
  {text: 'Cards', path: '/view-cards'},
  {text: 'Brands', path: '/view-brands'}
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
