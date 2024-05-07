import * as React from "react";
import { Link } from 'react-router-dom';
//
import ParticlesComponent from "@/components/background.tsx";
import './default.css'
import '@/index.css'

const Default: React.FC = () => {
    return (
        <div className="notfound-container">
            <ParticlesComponent id="background"/>
            <div className="notfound-text">
                <p className="notfound-text">
                    Page not found!
                </p>
                <Link to="/" >
                    <button className="goback">
                        GO BACK!
                    </button>
                </Link>
            </div>
        </div>
    );
}

export default Default