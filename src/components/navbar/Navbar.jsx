import { Container } from 'reactstrap'
import { Link, NavLink, Routes, Route} from 'react-router-dom'

export default () => {
    return(
        <nav className="__navbar">
            <Container>
                <div className="__menu">
                    <a href="#" className="__brand">DEVLESSON</a>
                    <ul>
                        <li><NavLink exact to="/" activeClassName="active"> Home </NavLink></li>
                        <li><NavLink to="/sobre" activeClassName="__active_page"> Sobre </NavLink></li>
                        <li><NavLink to="/cursos" activeClassName="__active_page"> Coursos </NavLink></li>
                        <li><Link to="/login" className="btn btn-menu"> Iniciar sessão
                         </Link></li>
                    </ul>
                </div>
            </Container>
        </nav>
    )
}