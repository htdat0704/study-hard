import './App.css';
import { Route, Routes} from 'react-router-dom'
import Landing from './components/layout/Landing'
import Auth from './components/views/Auth'
import AuthContextProvider from './context/Auth/AuthProvider';
import Dashboard from './components/views/Dashboard';

function App() {
  return (
    <div className="App">
      <AuthContextProvider>
        <Routes>
          <Route exact path='/' element={<Landing />} />
          <Route exact path='/login' element={<Auth authRoute='login' />} />
          <Route exact path='/register' element={ <Auth authRoute='register' />} />
          <Route exact path='/dashboard' element={<Dashboard />} />
        </Routes>
      </AuthContextProvider>
    </div>
  );
}

export default App;
