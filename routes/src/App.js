import './App.css';
import { Link, Route, Routes } from 'react-router-dom';
import  About  from "./Aboutpage";
import  Blogpage  from "./Blogpage";
import  Homepage  from "./Homepage";
import  Notfoundpage  from "./Notfoundpage";

function App() {
  return (
    <>   
      <header className='App-header'>
          <Link to="/">Home</Link>
          <Link to="/posts">Blog</Link>
          <Link to="/about">About</Link>
      </header>
      <Routes>
        <Route path="/" element={<Homepage/>}/>
        <Route path="/posts" element={<Blogpage/>}/>
        <Route path="/about" element={<About/>}/>
        <Route path="*" element={<Notfoundpage/>}/>
      </Routes>
    </>   
  );
}

export default App;
