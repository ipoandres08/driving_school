import './App.css';
import { AddCustumer } from './components/AddCustumer';
import { Navbar } from './components/Navbar';
import {BrowserRouter, Route, Routes} from "react-router-dom"
import { CustumerList } from './components/CustumerList';

function App() {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route index element={<CustumerList />}></Route>
          <Route path='/' element={<CustumerList />}></Route>
          <Route path='/addCustumer' element={<AddCustumer />}></Route>
          <Route path='/edit-custumer/:id' element={<AddCustumer />}></Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
