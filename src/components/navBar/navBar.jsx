import { Link, useLocation } from "react-router-dom";
import { IoHome } from "react-icons/io5";
import { IoMdAddCircleOutline } from "react-icons/io";
import './navBar.css';

function NavBar() {
    const location = useLocation();
    const isHomePage = location.pathname === "/";
    const isNewVideoPage = location.pathname === "/newVideo";

    return (
        <div className="nav-bar">
            {isHomePage && (
                <>
                    <Link to="/" className="nav-icon">
                        <button className="icon">
                            <IoHome className="icon-home" />
                            <p>INICIO</p>
                        </button>
                    </Link>
                    <Link to="/newVideo" className="nav-icon">
                        <IoMdAddCircleOutline className="icon-add" />
                    </Link>
                </>
            )}
            {isNewVideoPage && (
                <>
                    <Link to="/" className="nav-icon">
                        <IoHome className="icon-home" />
                    </Link>
                    <Link to="/newVideo" className="nav-icon">
                        <button className="icon">
                            <IoMdAddCircleOutline className="icon-add" />
                            <p>NUEVO VIDEO</p>
                        </button>
                    </Link>
                </>
            )}
        </div>
    );
}

export default NavBar;
