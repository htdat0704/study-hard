import './App.css';
import { Route, Routes} from 'react-router-dom'
import Landing from './components/layout/Landing'
import Auth from './components/views/Auth'
import Dashboard from './components/views/Dashboard';
import Protected from './components/routing/ProtectedRout'
import {useContext} from 'react'
import {AuthContext} from './context/Auth/AuthContext'



function App() {

  const {state: { user }} = useContext(AuthContext);

  return (
    <div className="App">
        <Routes>
          <Route exact path='/' element={<Landing />} />
          <Route exact path='/login' element={<Auth authRoute='login' />} />
          <Route exact path='/register' element={ <Auth authRoute='register' />} />
          <Route
            path="dashboard"
            element={
            <Protected user={user}>
              <Dashboard />
            </Protected>
          }
        />
        </Routes>
    </div>
  );
}

export default App;
