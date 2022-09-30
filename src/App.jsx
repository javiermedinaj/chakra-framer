import "./App.css";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Proyects from "./components/Proyects";
import Content from "./components/Content";
// import { Container } from '@chakra-ui/react'

function App() {
  return (
    <div className="app">
      <Navbar />
      <Content />
      <Proyects />
      <Footer />
    </div>
  );
}

export default App;
