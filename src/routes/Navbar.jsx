import {Link} from "react-router-dom";
import sideBarImg from "../images/sidebar.svg"
import closeBtn from "../images/close btn.svg"

function handleNavOpen() {
    document.querySelector('.navbar__links').classList.toggle('open')

}

const Navbar = () => (
    <>
        <nav className={'navbar'} id="navbar">
            <h2><Link to={"/"}>get<span className="bold text--primary">Linked</span></Link></h2>
            <ul className="navbar__links">
                <img className={'closeBtn item'} src={closeBtn} alt="" onClick={() => {
                    handleNavOpen()
                }}/>
                <li className="navbar__links__item item"><a href="#">Timeline</a></li>
                <li className="navbar__links__item item"><a href="#">Overview</a></li>
                <li className="navbar__links__item item"><a href="#">FAQs</a></li>
                <li className="navbar__links__item item"><a href="#">Contact</a></li>
                <li className="navbar__links__item item">
                    <button>Register</button>
                </li>
            </ul>
            <button className="sidebar-activator" onClick={handleNavOpen}>
                <img src={sideBarImg} alt="Sidebar Image"/>
            </button>
        </nav>
    </>
);

export default Navbar;