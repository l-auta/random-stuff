import Header from "./components/header";
import NavBar from "./components/navBar";
import './App.css'

function App(){
  return(
    <div className="app">
      <div className="header">
        <Header />
      </div>
      <div className="navbar">
        <NavBar />
      </div>
    </div>
  )
}

export default App
