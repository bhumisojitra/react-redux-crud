import { Route, Routes } from 'react-router'
import AddData from './Components/AddData/AddData'
import View from './Components/View/View'
import EditData from './Components/EditData/EditData'
import Header from './Components/Header/Header'
// import './App.css'

function App() {

  return (
    <>
    <Header />
      <Routes>
        <Route path="/" element={<AddData />} />
        <Route path="/view" element={<View />} />
        <Route path="/edit" element={<EditData />} />
      </Routes>
    </>
  )
}

export default App
