import Titulo from "./components/Titulo";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import { Container } from "react-bootstrap";

function App() {
  return (
    <>
      <Navbar></Navbar>
      <Container className="main d-flex justify-content-center align-items-center">
        <Titulo cambiarTitulo="my friend!" />
      </Container>
      <Footer></Footer>
    </>
  );
}

export default App;
