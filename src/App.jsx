
import './App.css'
import EmployeeCompCreate from './Component/EmployeeCompCreate';
import FooterComp from './Component/FooterComp'
import HeaderComp from './Component/HeaderComp'
import ListEmpComponent from './Component/ListEmpComponent'
import { BrowserRouter, Route, Routes } from 'react-router-dom';

function App() {
  

  return (
    <>
    <BrowserRouter>
       <HeaderComp/>
       <Routes>
        {/* http://localhost:3000 */}
        <Route path='/' element={<ListEmpComponent/>}></Route>

        {/*http://localhost:3000/employees  */}
        <Route path='/employees' element={<ListEmpComponent/>}></Route>

        {/* http://localhost:3000/add-employee */}
        <Route path='/add-employee' element={<EmployeeCompCreate/>}></Route>

        {/* http://localhost:3000/update-employee/1 */}
        <Route path='/update-employee/:id' element= {<EmployeeCompCreate/>}></Route>

        </Routes>
        <FooterComp/>       
    </BrowserRouter>
   
    </>
  )
}

export default App
