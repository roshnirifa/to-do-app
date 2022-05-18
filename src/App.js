import { Route, Routes } from 'react-router-dom';
import './App.css';
import Header from './Pages/Header/Header';
import Home from './Pages/Home/Home';
import List from './Pages/List/List';
import Login from './Pages/Login/Login';
import NotFound from './Pages/NotFound/NotFound';
import RequriedAuth from './Pages/RequriedAuth/RequriedAuth';

function App() {
  return (
    <div>
      <Header></Header>
      <Routes>
        <Route path='/home' element={<Home></Home>}></Route>
        <Route path='/login' element={<Login></Login>}></Route>
        <Route path='/list' element={
          <RequriedAuth>
            <List></List>
          </RequriedAuth>
        }></Route>
        <Route path='*' element={<NotFound></NotFound>}></Route>
      </Routes>

    </div>
  );
}

export default App;
