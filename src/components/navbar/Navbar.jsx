import { Container } from "reactstrap";
import { Link, NavLink } from "react-router-dom";

// eslint-disable-next-line import/no-anonymous-default-export
export default () => {
  return (
    <nav className="__navbar">
      <Container>
        <div className="__menu">
          <Link to="/" className="__brand">
            DEVLESSON
          </Link>
          <ul>
            <li>
              <NavLink to="/" activeclassname="active">
                Home
              </NavLink>
            </li>
            <li>
              <NavLink to="/sobre" activeclassname="__active_page">
                Sobre
              </NavLink>
            </li>
            <li>
              <NavLink to="/cursos" activeclassname="__active_page">
                Coursos
              </NavLink>
            </li>
            <li>
              <Link to="/login" className="btn btn-menu">
                Iniciar sessão
              </Link>
            </li>
          </ul>
        </div>
      </Container>
    </nav>
  );
};
