
import { Routes, Route } from 'react-router-dom'
import '@/scss/app.scss'
import { useFetching } from '@/hooks/useFetching'
import Header from '@/components/Header'
import Home from '@/pages/Home'
import Cart from '@/pages/Cart'


function App() {
  useFetching();

  return (
    <>
      <div className="wrapper">
        <Header/>
        <div className="content">

            <Routes>
                <Route path='/React_pizza' element={<Home/>}/>
                <Route path='/React_pizza/cart' element={<Cart/>}/>
            </Routes>
          
        </div>
      </div>
    </>
  )
}

export default App
