import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import DefaultLayout from './pages/DefaultLayout';
import BookList from './pages/BookList';
import HomePage from './pages/HomePage';
import AboutUs from './pages/AboutUs';
import SingleBook from './pages/SingleBook';
import AddBook from './pages/AddBook';
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route Component={DefaultLayout}>
          <Route index Component={HomePage}></Route>
          <Route path='aboutUs' Component={AboutUs}></Route>
          <Route path='bookList'>
            <Route index Component={BookList}></Route>
            <Route path=':id' Component={SingleBook}></Route>
            <Route path='create' Component={AddBook}></Route>
          </Route>
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
