// import logo from './logo.svg';
import './App.css';
import NavbarComponent from './components/NavbarComponent';
import CarouselComp from './components/CarouselComp';
import 'bootstrap/dist/css/bootstrap.min.css'

function App() {
  return (
    <div className="App">
        <NavbarComponent />
      <header className="App-header">
        {/* <img src={logo} className="App-logo" alt="logo" /> */}
        < CarouselComp />
      </header>
    </div>
  );
}

export default App;
