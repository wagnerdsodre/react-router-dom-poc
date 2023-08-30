
import './style/index.css'
import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { Home } from './components/Home'
import { Sobre } from './components/Sobre'
import { Menu } from './components/Menu'
import { Item } from './components/Item'
import { Redirect } from './components/Redirect'
import { NotFound } from './components/NotFound'
import { Block } from './components/Block'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
   <BrowserRouter>
   <Menu/>
   <Routes>
    <Route path='/' element={<Home/>}/>
    <Route path='/sobre' element={<Sobre/>}/>
    <Route path='/redirect' element={<Redirect/>}/>
    <Route path='/item' element={<Item/>}/>
    {/* <Route path='/item/:id' element={<Item/>}> */}
    <Route path='/item/' element={<Item/>}>
      <Route path=':id' element={<Block/>}/>
    </Route>

    <Route path='*' element={<NotFound/>}/>

   </Routes>
   </BrowserRouter>
  </React.StrictMode>,
)
