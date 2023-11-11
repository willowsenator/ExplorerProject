import { useState } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { Home } from '../components/Home'
import { Balance } from '../components/Balance'
import { Transaction } from '../components/Transaction'
import { Block } from '../components/Block'

function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home/>}>
           <Route path='balance' element={<Balance/>}/>
           <Route path='tx' element={<Transaction/>}/>
           <Route path='block' element={<Block/>}/>
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
