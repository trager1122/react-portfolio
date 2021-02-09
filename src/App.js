import './App.css';
import Navigation from "./components/Navbar";
import PageBody from "./components/PageBody";
import background from "./img/pexels-danny-meneses-943096.jpg";

function App() {
  return (
    <div className="App"  style={{backgroundImage: `url(${background})`}}>
      <Navigation />
      <PageBody />
    </div>
  );
}

export default App;
