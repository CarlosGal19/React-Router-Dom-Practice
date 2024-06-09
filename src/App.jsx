import Header from './components/Common/Header'
import Home from './components/Home/Home'
import Profile from './components/Profile/Profile'
import Products from './components/Products/Products'
import New from './components/Products/New'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
// import './App.css'

function App() {

  return (
    <>
      <Header />
      <BrowserRouter>
        <Routes>
          <Route path='/'>
            <Route path='home' element={<Home/>} />
            <Route path='profile' element={<Profile/>} />
            <Route path='products'>
              <Route index element={<Products/>}/>
              <Route path='new' element={<New/>}/>
            </Route>
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
