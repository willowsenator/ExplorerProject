import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { Home } from '../components/Home'
import { Balance } from '../components/Balance'
import { Transaction } from '../components/Transaction'
import { Block } from '../components/Block'
import { NoValidTransaction } from '../components/NoValidTransaction'
import { NoValidAccountAddress } from '../components/NoValidAccountAddress'
import { NotFound } from '../components/NotFound'
import { NotEmptyField } from '../components/NotEmptyField'
import { NoValidBlock } from '../components/NoValidBlock'
 
function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home/>}>
           <Route path='balance/:account' element={<Balance />}/>
           <Route path='tx/:tx' element={<Transaction />}/>
           <Route path='block/:blockNumber' element={<Block/>}/>
           <Route path='noValidTransaction' element={<NoValidTransaction/>} />
           <Route path='noValidAccountAddress' element={<NoValidAccountAddress/>} />
           <Route path='notFound' element={<NotFound/>} />
           <Route path='notEmptyField' element={<NotEmptyField/>}/>
           <Route path='noValidBlock' element={<NoValidBlock/>} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
