import { Link } from "react-router-dom";

export default function NavbarAdmin() {

    function logoutUser() {
        localStorage.removeItem('token')
        localStorage.removeItem('email')
    }

    return (
        <div>
            <nav className="__sidebar">

                <div className="__logo">
                    <Link to="/">DEVLESSON</Link>
                </div>
                <ul>
                    <li> <Link to='/dashboard'> Dashboard </Link> </li>
                    <li> <Link to='/dashboard/module'> Modulos </Link> </li>
                    <li> <Link to='/dashboard/course'> Course </Link> </li>
                    <li> <Link to='/login' onClick={logoutUser}> Logout </Link> </li>
                </ul>
            </nav>
        </div>
    )
}