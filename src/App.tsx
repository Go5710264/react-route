import { NavLink, Route, Routes, Link, useSearchParams, Navigate } from 'react-router-dom'
import List from './components/List'
import './App.css'
import NewRecipe from './components/NewRecipe'
import Recipe from './components/Recipe'

// - / - Recipes list
// - /recipes/new - Add new recipe
// - /recipes/123 - Recipe's page
// - /qwerasdf - 404 page

const Header = () : JSX.Element => {
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

const Page404 = () : JSX.Element => {
  return (
    <div>Страница не найдена. Перейти на <Link to='/'>главную страницу</Link>.</div>
  )
}

/**
 * Старые страницы:
 * http://localhost:5173/recipes.php?id=qwerasdf
 * http://localhost:5173/recipes.php?id=new
 */

const Redirect = (): JSX.Element => {
  const [searchParams, setSearchParams] = useSearchParams();
  const rId = searchParams.get('id');
  console.log(rId);

  return <Navigate to={`/recipes/${rId}`}/>
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
