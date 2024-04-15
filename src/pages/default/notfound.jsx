// home.jsx
import ParticlesComponent from "@/components/background.jsx";
import './notfound.css'
import { Link } from 'react-router-dom';

function NotFound() {
    return (
        <div className="notfound-container">
            <ParticlesComponent id="background"/>
            <div className="notfound-text">
                <p className="notfound-text">
                    Page not found!
                </p>
                <Link to="/" >
                    <button className="goback-button">
                        GO BACK!
                    </button>
                </Link>
            </div>
        </div>
    );
}

export default NotFound;