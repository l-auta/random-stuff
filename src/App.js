import Header from "./components/header";
import NavBar from "./components/navBar";
import About from "./about";
import './App.css'

function App(){
  return(
    <div className="app">
      <div className="header">
        <Header />
      </div>
      <div className="navbar">
        <NavBar />
      </div >
      <div className="about" >
      <About />
      </div>
    </div>
  )
}

export default App
