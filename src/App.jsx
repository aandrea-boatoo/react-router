import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import DefaultLayout from './pages/DefaultLayout'
import BookList from './pages/BookList'
import HomePage from './pages/HomePage'
import AboutUs from './pages/AboutUs'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route Component={DefaultLayout}>
          <Route index Component={HomePage}></Route>
          <Route path='/bookList' Component={BookList}></Route>
          <Route path='/aboutUs' Component={AboutUs}></Route>
        </Route>
      </Routes>
    </BrowserRouter>
    // <HeaderComponent />
    // <MainComponent />
    // <FooterComponent />
  )
}

export default App
