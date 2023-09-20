import App from "../App.jsx";
import Navbar from "./Navbar.jsx";

function Root() {
    return <>
        <Navbar/>
        <div id="detail">
            <App/>
        </div>
    </>
};

export default Root;