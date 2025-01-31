import './App.css';
import Categories from './Screens/Categories';
import CourseInfo from './Screens/CourseInfo';
import DataSet from './Screens/DataSet';
import Home from './Screens/Home';
import { Route, Routes } from 'react-router';
import Login from './Screens/Login';
import SignUp from './Screens/SignUp';
import DashboardHome from './Screens/DashboardHome';
import Profile from './Screens/Profile';
import { useState } from 'react';
import Admin from './Screens/Admin';
import UploadDataset from './Screens/UploadDataset';
import About from './Screens/About';

function App() {

  const [loggedIn, setLoggedIn] = useState(false);
  const [user, setUser] = useState(null);

  return (
    
    <div>

      <Routes>
      <Route 
          path="/" 
          element={<Home 
            loggedIn={loggedIn} 
            userDetails={user} 
          />} 
        />
        <Route path='/courseInfo/:id' element={<CourseInfo/>}/>
        <Route path='/about' element={<About/>}/>

        <Route path='/categories' element={<Categories/>}/>
        <Route path='/dataset' element={<DataSet/>}/>
        <Route path='/login' element={<Login setLoggedIn={setLoggedIn} setUser={setUser} />}/>
        <Route path='/signup' element={<SignUp/>}/>
        <Route path='/dashboard' element={<DashboardHome setLoggedIn={setLoggedIn} setUser={setUser}/>}/>
        <Route path='/profile' element={<Profile setLoggedIn={setLoggedIn} setUser={setUser}/>}/>

        <Route path='/admin' element={<Admin setLoggedIn={setLoggedIn} setUser={setUser}/>}/>
        <Route path='/upload' element={<UploadDataset setLoggedIn={setLoggedIn} setUser={setUser}/>}/>
      </Routes>

    </div>

    
  );
}

export default App;
