import { Route, Routes } from 'react-router-dom'
import './App.css'
import { Counter, Login, ValtioExample } from './routes/routes'

function App() {

  return (
    <>
      <Routes>
        <Route path="/" element={<Login/>}/>
        <Route path="/redux-example" element={<Counter/>}></Route>
        <Route path="/valtio-example" element={<ValtioExample/>}></Route>
      </Routes>
    </>
  )
}

export default App
