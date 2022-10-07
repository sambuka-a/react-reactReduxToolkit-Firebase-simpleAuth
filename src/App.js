import {Routes, Route} from 'react-router-dom'
import HomePage from './pages/HomePage';
import LoginPage from './pages/LoginPage';
import SignUpPage from './pages/SignUpPage';
import ErrorPage from './pages/ErrorPage';

function App() {
  return (
    <Routes>
      <Route path="/" element={<HomePage/>} />
      <Route path="/login" element={<LoginPage/>} />
      <Route path="/signup" element={<SignUpPage/>} />
      <Route path='*' element={<ErrorPage/>}/>
    </Routes>
  );
}

export default App;
