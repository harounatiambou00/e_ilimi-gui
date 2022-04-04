import './App.css';
import { Routes, Route } from 'react-router-dom';
import {User, UserHome, UserSignIn, UserSignUp} from './pages/user'
import {Admin, AdminHome, AdminSignIn} from './pages/admin'

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<User />}>
          <Route index path='' element={<UserHome />} />
          <Route path='client/:clientId' element={<UserHome userType="client" />} />
          <Route path='seller/:sellerId' element={<UserHome userType="seller"/>} />
          <Route path='user-sign-in' element={<UserSignIn/>} />
          <Route path='user-sign-up' element={<UserSignUp/>} />
        </Route>
        <Route path='admin' element={<Admin />}>
          <Route index path='' element={<AdminSignIn />} />
          <Route path=':id' element={<AdminHome />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
