import { ReactElement, useState } from 'react'
import { NavLink, Route, Routes } from 'react-router-dom'
import List from './components/List'
import './App.css'

const Header = () : ReactElement => {
  return (
    <div className='header'>
      Recipes Heaven
      {' '}
      <NavLink to="/" >Список</NavLink>
      {' | '}
      <NavLink to="/recipes/new">Добавить</NavLink>
    </div>
  )
}

// const List = () : ReactElement => {
//   return (
//     <ul className='list'>
//       <li>Торт Наполеон</li>
//       <li>Борщ</li>
//       <li>Пельмени</li>
//       <li>Картофельное пюре</li>
//     </ul>
//   )
// }

function App() {

  return (
    <>
      <Header />
      <div className='content'>
        <Routes>
          <Route path="/" element={<List/>}></Route>
        </Routes>
      </div>
    </>
  )
}

export default App
