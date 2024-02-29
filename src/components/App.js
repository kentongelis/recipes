import { Outlet } from 'react-router-dom';
import './App.css';
import Title from './Title.js';
import Footer from './Footer.js'

function App() {
  return (
    <div>
    <Title />
    <Outlet />
    <Footer />
  </div>
  )
}


export default App;
