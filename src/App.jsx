import 'bootstrap/dist/css/bootstrap.min.css';
import { Container } from 'reactstrap'
import Navbar from './components/navbar/Navbar'
import Hero from './assets/img/hero.svg'

import { Link, NavLink, Routes, Route} from 'react-router-dom'

function App() {
  return (
    <div>
      <header className="__header">
          <Navbar />
          <Container>
            <div className="__hero">
              <div className="__content">
                  <h2>Bem vindo ao <span>DEVLESSON</span></h2>
                  <br />
                  <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum, 
                    blanditiis <br /> amet ipsa natus voluptatem commodi enim eveniet tenetur? 
                    Voluptate <br /> maxime perspiciatis vero quo deleniti numquam at ipsum beatae. <br /> Quis, similique?
                  </p>
                  <a href="#" className="btn btn-hero"> Registrar-se </a>
              </div>
              <div className="image">
                <img src={Hero} alt="Hero" />
              </div>
            </div>  
          </Container>
      </header>
    </div>
  );
}

export default App;
