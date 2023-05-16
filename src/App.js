import './App.css';
import Home from './components/Home'
import About from './components/About';
import {BrowserRouter,Routes,Route,Navigate} from 'react-router-dom';
import Navbar from './components/Navbar';
import User from './components/User';
import Filter from './components/Filter';
import Contact from './components/Contact';
import Company from './components/Company';
import Youtube from './components/Channel';
import Other from './components/Other';
import Channel from './components/Channel';
import Login from './components/Login';
import Protected from './components/Protected';
// import PageNotFound from './components/PageNotFound';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
     <Navbar/>
      <Routes>
        <Route path='/' element={<Protected Component={Home}/>}/>
        <Route path='/about' element={<Protected Component={About}/>}/>
        <Route path='/user/:name' element={<User/>}/>
        <Route path='/filter' element={<Protected Component={Filter}/>}/>
        <Route path='/login' element={<Login/>}/>
       {/* <Route path='/*' element={<PageNotFound/>}/> */}
        <Route path='/*' element={<Navigate to="/"/>}/>
        <Route path='/contact/' element={<Contact/>}>
        <Route path='company' element={<Company/>}/>
        <Route path='channel' element={<Channel/>}/>
        <Route path='other' element={<Other/>}/>
       </Route>
      </Routes>
      
      </BrowserRouter>
    
    </div>
  );
}

export default App;
