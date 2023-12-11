import { NavLink, Route, Routes, Link } from 'react-router-dom'
import List from './components/List'
import './App.css'
import NewRecipe from './components/NewRecipe'
import Recipe from './components/Recipe'
import { useSearchParams } from '../node_modules/react-router-dom/dist/index'

// - / - Recipes list
// - /recipes/new - Add new recipe
// - /recipes/123 - Recipe's page
// - /qwerasdf - 404 page

const Header = () : unknown => {
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

const Page404 = () : unknown => {
  return (
    <div>Страница не найдена. Перейти на <Link to='/'>главную страницу</Link>.</div>
  )
}

const Redirect = () : unknown => {
  const [searchParams] = useSearchParams();
  const rId = searchParams.get('id');
  return console.log(rId)
}

function App() {

  return (
    <>
      <Header />
      <div className='content'>
        <Routes>
          <Route path="/" element={<List/>}/>
          <Route path='/recipes/new' element={<NewRecipe/>}/>
          <Route 
            path='/recipes/:rId' 
            element={<Recipe/>}
          />
          <Route 
            path='*'
            element={<Page404/>}
          />
          <Route
            path='recipes.php'
            element={<Redirect/>}
          />

        </Routes>
      </div>
    </>
  )
}

export default App
